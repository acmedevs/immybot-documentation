import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.392dd896.js";const e="/assets/2021-03-15-08-29-07.c9d36958.png",t="/assets/2021-03-15-08-29-35.7ba594f8.png",l="/assets/2021-03-15-08-29-41.6717b610.png",i="/assets/2021-03-15-08-30-29.e8f8369b.png",p="/assets/2021-03-15-08-47-28.29c6e137.png",r="/assets/2021-03-15-08-37-50.56c2d07c.png",f=JSON.parse('{"title":"Testing with Windows Sandbox","description":"","frontmatter":{},"headers":[],"relativePath":"windows-sandbox.md","filePath":"windows-sandbox.md"}'),d={name:"windows-sandbox.md"},c=n('<h1 id="testing-with-windows-sandbox" tabindex="-1">Testing with Windows Sandbox <a class="header-anchor" href="#testing-with-windows-sandbox" aria-label="Permalink to &quot;Testing with Windows Sandbox&quot;">​</a></h1><p>Windows Sandbox is a fast loading disposable container in Windows that loses all settings when shutdown or restarted. It is very convenient for testing software deployments. It should be noted that not all software is compatible with Windows Sandbox, particular software that installs drivers or requires restarts.</p><p>If you haven&#39;t used Windows Sandbox before, you can enable it by opening Windows PowerShell as Admin and running the following command:</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Enable-WindowsOptionalFeature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">FeatureName </span><span style="color:#9ECBFF;">&quot;Containers-DisposableClientVM&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">All </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Online </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">NoRestart</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Enable-WindowsOptionalFeature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">FeatureName </span><span style="color:#032F62;">&quot;Containers-DisposableClientVM&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">All </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Online </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">NoRestart</span></span></code></pre></div><h2 id="download-windows-sandbox-file-wsb" tabindex="-1">Download Windows Sandbox file (.wsb) <a class="header-anchor" href="#download-windows-sandbox-file-wsb" aria-label="Permalink to &quot;Download Windows Sandbox file (.wsb)&quot;">​</a></h2><p><img src="'+e+'" alt=""></p><p><img src="'+t+'" alt=""></p><p>Wait for ImmyBot Agent to install <img src="'+l+'" alt=""></p><p><a href="#onboarding">Onboard</a> the Sandbox <img src="'+i+'" alt=""></p><p><img src="'+p+'" alt=""></p><p><img src="'+r+'" alt=""></p><p>This will create an &quot;Onboarding&quot; Session (sessions are like running gpupdate) that will apply all applicable Deployments (deployments are like Group Policies)</p>',12),w=[c];function b(h,_,g,m,u,y){return a(),o("div",null,w)}const x=s(d,[["render",b]]);export{f as __pageData,x as default};