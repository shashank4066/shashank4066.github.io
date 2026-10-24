# shashankdev.tech — DNS connection

Open the authoritative DNS zone for shashankdev.tech in your .TECH domain control panel.

| Type | Host | Value |
| --- | --- | --- |
| A | @ (or blank apex host) | 185.199.108.153 |
| A | @ (or blank apex host) | 185.199.109.153 |
| A | @ (or blank apex host) | 185.199.110.153 |
| A | @ (or blank apex host) | 185.199.111.153 |
| CNAME | www | shashank4066.github.io. |

Preserve unrelated MX and TXT records. Review existing apex A/AAAA and www records before replacing conflicting website routing. Do not add wildcard records. If DNS is delegated elsewhere, edit that provider's zone.

Set GitHub Settings → Pages → Custom domain to shashankdev.tech, then enable Enforce HTTPS once the certificate is available. GitHub account Settings → Pages can verify ownership with a generated TXT record.

References:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://cp.get.tech/kb/servlet/KBServlet/faq471.html
