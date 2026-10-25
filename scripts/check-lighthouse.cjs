const fs=require('node:fs');
const report=JSON.parse(fs.readFileSync('reports/mobile.report.json','utf8'));
const scores=Object.fromEntries(Object.entries(report.categories).map(([key,value])=>[key,Math.round(value.score*100)]));
console.log(JSON.stringify({url:report.finalDisplayedUrl,fetchTime:report.fetchTime,scores,metrics:{FCP:report.audits['first-contentful-paint'].displayValue,LCP:report.audits['largest-contentful-paint'].displayValue,CLS:report.audits['cumulative-layout-shift'].displayValue,TBT:report.audits['total-blocking-time'].displayValue}},null,2));
fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,'## Mobile Lighthouse\n\n'+Object.entries(scores).map(([k,v])=>'- '+k+': **'+v+'**').join('\n')+'\n\nURL: '+report.finalDisplayedUrl+'\n\nAudit time: '+report.fetchTime+'\n');
const failures=Object.entries(report.audits).filter(([,a])=>a.score!==null&&a.score<1&&a.details?.type!=='opportunity').map(([id,a])=>({id,score:a.score,title:a.title,details:a.details?.items?.slice(0,5)}));
fs.writeFileSync('reports/summary.json',JSON.stringify({scores,failures},null,2));
if(scores.performance<90||scores.accessibility<90){console.error('Mobile budget failed: performance and accessibility must each reach 90.');process.exitCode=1;}
