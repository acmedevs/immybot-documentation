import{_ as e,c as t,o as a,U as o}from"./chunks/framework.Q7Se86sZ.js";const y=JSON.parse('{"title":"Frequently Asked Questions","description":"","frontmatter":{},"headers":[],"relativePath":"FAQ.md","filePath":"FAQ.md"}'),n={name:"FAQ.md"},i=o(`<div class="danger custom-block"><p class="custom-block-title"><em>ImmyBot will no longer support Windows 7, Sever 2008 (or Server 2012 w/o <a href="https://learn.microsoft.com/en-us/windows-server/get-started/extended-security-updates-overview" target="_blank" rel="noreferrer">ESUs</a>) machines after May 14th, 2024</em></p><p>.NET 7 support is ending May 14th, and as a result we will be transitioning the Agent to .NET 8 at that time period. We will not be offering support for these machines after May 14th.</p><p>Please see the <a href="https://docs.immy.bot/FAQ.html#what-windows-versions-does-immyagent-support" target="_blank" rel="noreferrer">FAQ section for more details</a></p></div><h1 id="frequently-asked-questions" tabindex="-1">Frequently Asked Questions <a class="header-anchor" href="#frequently-asked-questions" aria-label="Permalink to &quot;Frequently Asked Questions&quot;">​</a></h1><h2 id="what-is-the-difference-between-the-starter-and-standard-plan" tabindex="-1">What is the difference between the Starter and Standard plan? <a class="header-anchor" href="#what-is-the-difference-between-the-starter-and-standard-plan" aria-label="Permalink to &quot;What is the difference between the Starter and Standard plan?&quot;">​</a></h2><p>Both plans allow you to import all of your existing agents into ImmyBot if you use one of our support integrations.</p><p>Both plans allow installing and updating of the ImmyBot agent on all of your existing computers.</p><p>Both plans allow running maintenance on all of your computers given that the computer was imported into ImmyBot in the last 7 days.</p><h3 id="starter" tabindex="-1">Starter <a class="header-anchor" href="#starter" aria-label="Permalink to &quot;Starter&quot;">​</a></h3><p>Starter does not charge maintenance per computer since it does not support ongoing maintenance for your computers.</p><p>Once a computer has been in ImmyBot for at least 7 days, maintenance can no longer be executed against it. This includes all onboarding, full maintenance, and adhoc sessions. If you need to manage ongoing maintenance against a computer older than 7 days, then you will need to upgrade to Standard.</p><h3 id="standard" tabindex="-1">Standard <a class="header-anchor" href="#standard" aria-label="Permalink to &quot;Standard&quot;">​</a></h3><p>Standard charges per maintained computer since it supports ongoing maintenance.</p><h4 id="what-is-a-maintained-computer" tabindex="-1">What is a maintained computer? <a class="header-anchor" href="#what-is-a-maintained-computer" aria-label="Permalink to &quot;What is a maintained computer?&quot;">​</a></h4><p>Since we allow you to import all of your agents into ImmyBot, we don&#39;t simply charge per agent.</p><p>Instead, we only consider computers that have received ongoing maintenance.</p><p>A computer has received ongoing maintenance if an onboarding, full maintenance, or adhoc session has been run against it after the computer has been in ImmyBot for over 7 days.</p><h4 id="maintenance-per-computer" tabindex="-1">Maintenance per computer <a class="header-anchor" href="#maintenance-per-computer" aria-label="Permalink to &quot;Maintenance per computer&quot;">​</a></h4><p>When maintenance is performed against a computer older than 7 days, ImmyBot will check the following:</p><ol><li><p>Is this computer already counted towards your maintained count?</p><ul><li>If it is, then maintenance can be performed on this computer.</li></ul></li><li><p>Are we at the maximum number of maintained computers for this subscription?</p><ul><li>If it is not, then this computer will be added to your active maintained computer count, and maintenance can be performed on this computer.</li></ul></li></ol><p>When a subscription is at the maximum maintained count, only maintenance for computers considered in the count will be allowed. In order to run maintenance on other computers, you can purchase more computer licenses for your subscription.</p><h2 id="do-i-need-a-separate-usb-installer-per-tenant" tabindex="-1">Do I need a separate USB/Installer per tenant? <a class="header-anchor" href="#do-i-need-a-separate-usb-installer-per-tenant" aria-label="Permalink to &quot;Do I need a separate USB/Installer per tenant?&quot;">​</a></h2><p>No. Create a USB pointing to your own tenant (or create an “Onboarding” tenant) and don’t select the Auto-Onboard option.</p><p>You will change the tenant of the computer on the Onboarding area of the computer after it comes into New Computers</p><h2 id="will-immybot-start-doing-anything-without-my-consent-like-when-i-save-a-deployment-will-it-automatically-deploy" tabindex="-1">Will ImmyBot start doing anything without my consent? Like when I save a deployment, will it automatically deploy? <a class="header-anchor" href="#will-immybot-start-doing-anything-without-my-consent-like-when-i-save-a-deployment-will-it-automatically-deploy" aria-label="Permalink to &quot;Will ImmyBot start doing anything without my consent? Like when I save a deployment, will it automatically deploy?&quot;">​</a></h2><p>ImmyBot does not deploy anything automatically. You can feel safe saving your Deployments. Think of them like documenting how things SHOULD be. If you want Immy to automatically enforce deployments, you would need the Immy Deploy plan which allows you to create schedules.</p><p>Think of it like if Group Policy only updated if you manually ran gpupdate /force or otherwise specified a schedule for the gpupdates to happen. We understand that updating and installing software on existing computers can be intrusive to the user which is why we schedule these actions out and give the user the ability to postpone via interactive emails.</p><p>IMPORTANT: If you setup integration with your RMM, when you map an RMM client to an ImmyBot tenant, ImmyBot will begin running inventory scripts on those machines every 24 hours. These scripts are read-only, but if you have aggressive monitoring software it may cause false alarms.</p><h2 id="what-if-i-don-t-know-which-user-will-be-using-the-computer" tabindex="-1">What if I don’t know which user will be using the computer? <a class="header-anchor" href="#what-if-i-don-t-know-which-user-will-be-using-the-computer" aria-label="Permalink to &quot;What if I don’t know which user will be using the computer?&quot;">​</a></h2><p>Do your best to find out, or assign machines to specific users ahead of time. Without this, user level customizations are impossible. However, you may find yourself in a shared-computer scenario where every computer gets the same 365 applications. Simply create a deployment for those 365 applications for all computers under that tenant.</p><h2 id="can-immy-join-azuread" tabindex="-1">Can Immy join AzureAD? <a class="header-anchor" href="#can-immy-join-azuread" aria-label="Permalink to &quot;Can Immy join AzureAD?&quot;">​</a></h2><p>Yes. Create a deployment for the Join AzureAD task. We use the bulk enrollment technique and generate a provisioning package to join the machine to AzureAD. At the time of writing, this requires you to create a user in each customer’s tenant. We plan to remove this requirement in the future.</p><h2 id="my-azuread-join-action-is-failing-what-are-some-common-fixes" tabindex="-1">My AzureAD Join action is failing, what are some common fixes? <a class="header-anchor" href="#my-azuread-join-action-is-failing-what-are-some-common-fixes" aria-label="Permalink to &quot;My AzureAD Join action is failing, what are some common fixes?&quot;">​</a></h2><p>Check if MFA Requirement for Joining is enabled via <a href="https://portal.azure.com/#view/Microsoft_AAD_ConditionalAccess/ConditionalAccessBlade/~/Policies" target="_blank" rel="noreferrer">Conditional Access</a> or <a href="https://portal.azure.com/#view/Microsoft_AAD_Devices/DevicesMenuBlade/~/DeviceSettings/menuId~/null" target="_blank" rel="noreferrer">Azure Device Settings</a>. MFA requirement for all users in <a href="https://portal.azure.com/#view/Microsoft_AAD_ConditionalAccess/ConditionalAccessBlade/~/Policies" target="_blank" rel="noreferrer">Conditional Access</a> will also block the execution, as the package_XXX user will encounter a MFA prompt. Most other situations are noted during execution failure.</p><h2 id="what-windows-versions-does-immyagent-support" tabindex="-1">What Windows versions does ImmyAgent support? <a class="header-anchor" href="#what-windows-versions-does-immyagent-support" aria-label="Permalink to &quot;What Windows versions does ImmyAgent support?&quot;">​</a></h2><p>The ImmyAgent is written in .NET, and as such supports the same <a href="https://github.com/dotnet/core/blob/main/release-notes/8.0/supported-os.md" target="_blank" rel="noreferrer">Windows versions the .NET runtime supports</a>. <strong>Currently, the ImmyAgent runs on .NET 7 and therefore supports Win7+ devices. However, support for .NET 7 is ending May 14th, 2024.</strong> After May 14th, Immybot will be transitioning the Agent to the .NET 8 runtime. Win7 is not officially supported in .NET 8, and as such will no longer be supported in ImmyBot. Older systems may continue to work inside of ImmyBot with necessary updates applied, however, we will not be offering any support for unsupported machines.</p><ul><li>Internal testing has shown Win7 (and similar) machines can still work on .NET 8 as long as they have the necessary updates, utilizing a <a href="https://legacyupdate.net/" target="_blank" rel="noreferrer">3rd party tool such as Legacy Update</a>.</li></ul><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>We do not endorse Legacy Update or similar tools. The best thing to do is upgrade the system. Use at your own risk.</p></div><h2 id="can-immy-make-deploying-via-intune-more-simple" tabindex="-1">Can Immy make deploying via Intune more simple? <a class="header-anchor" href="#can-immy-make-deploying-via-intune-more-simple" aria-label="Permalink to &quot;Can Immy make deploying via Intune more simple?&quot;">​</a></h2><p>Absolutely! There is a global <a href="#task">Task</a> labeled &quot;<strong>Deploy ImmyAgent to Intune</strong>&quot; that can do an excellent job of it.</p><ul><li>Ensure you are using the <a href="https://docs.immy.bot/azure-graph-permissions-setup.html#custom" target="_blank" rel="noreferrer"><strong>Custom</strong> Graph Permissions</a></li><li>Ensure you have added the Graph <strong>Application</strong> permission DeviceManagementConfiguration.ReadWrite.All to your app registration</li><li>Ensure you have re-consented to your linked tenants with your new Custom registration</li><li>If there is a failure of the deployment, there is likely a permissions issue with the app registration</li></ul><h2 id="can-immy-help-migrate-my-customers-to-azuread-from-on-premises-environments" tabindex="-1">Can Immy help migrate my customers to AzureAD from On-Premises environments? <a class="header-anchor" href="#can-immy-help-migrate-my-customers-to-azuread-from-on-premises-environments" aria-label="Permalink to &quot;Can Immy help migrate my customers to AzureAD from On-Premises environments?&quot;">​</a></h2><p>Yes, we have a <a href="#task">Task</a> that can migrate machines to associate the user’s profile to their Azure AD identity and join the machine to Azure AD. It can also do the same to and from Active Directory</p><h2 id="domain-join-didn-t-work-what-gives" tabindex="-1">Domain Join didn’t work, what gives? <a class="header-anchor" href="#domain-join-didn-t-work-what-gives" aria-label="Permalink to &quot;Domain Join didn’t work, what gives?&quot;">​</a></h2><p>Make sure there is a Domain Controller in Immy for the machine. If you are using a supported RMM like CW Automate/Control setup the integration so the Domain Controller is imported automatically. Otherwise, you’ll need to install the ImmyAgent on a domain controller for that customer.</p><p>If the Domain Controller doesn’t have the red “Domain Controller” designation, press “Run Inventory”. This may happen if it was recently added to ImmyBot.</p><p>Pay attention to the script output, Immy may be reporting that there is a name collision, or that it was unable to run scripts on the domain controller, usually due to security software.</p><h2 id="why-are-my-computers-stuck-in-identification" tabindex="-1">Why are my computers stuck in <a href="#identification">Identification</a> <a class="header-anchor" href="#why-are-my-computers-stuck-in-identification" aria-label="Permalink to &quot;Why are my computers stuck in [Identification](#identification)&quot;">​</a></h2><ol><li>The machine has a security tool like Defender for Endpoint, Crowdstrike, Bitdefender or Threatlocker blocking our scripts from running</li></ol><ul><li>You&#39;ll want to create exclusions for ImmyBot</li></ul><ol><li>WMI is broken on the machine (Usually on older machines)</li></ol><h2 id="can-you-target-devices-in-azure-groups" tabindex="-1">Can you target devices in Azure Groups? <a class="header-anchor" href="#can-you-target-devices-in-azure-groups" aria-label="Permalink to &quot;Can you target devices in Azure Groups?&quot;">​</a></h2><p>Yes, but ImmyBot requires an additional permission on the ImmyBot app registration. You need to grant the <code>Microsoft Graph - Devices.Read.All</code> permission in order for devices to be pulled from Azure Groups.</p><h2 id="how-do-i-uninstall-the-immyagent" tabindex="-1">How do I uninstall the ImmyAgent? <a class="header-anchor" href="#how-do-i-uninstall-the-immyagent" aria-label="Permalink to &quot;How do I uninstall the ImmyAgent?&quot;">​</a></h2><p>Create a deployment for the &quot;ImmyBot Agent&quot; and set software should be to &quot;Uninstalled&quot;</p><p><img src="https://github.com/immense/immybot-documentation/assets/95599350/02be5654-7393-4f95-bf56-dde089582ccf" alt="image"></p><p>Or</p><p>Run the following from Command Line</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wmic product where name=&quot;ImmyBot Agent&quot; call uninstall /nointeractive</span></span></code></pre></div><p>Or</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$product = Get-WmiObject win32_product | \`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>where{$_.name -eq &quot;ImmyBot Agent&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$product.IdentifyingNumber</span></span>
<span class="line"><span></span></span>
<span class="line"><span>msiexec /x $product.IdentifyingNumber /quiet /noreboot</span></span></code></pre></div><h2 id="how-are-we-able-to-define-which-version-of-windows-is-installed-during-the-initial-setup" tabindex="-1">How/are we able to define which version of Windows is installed during the initial setup? <a class="header-anchor" href="#how-are-we-able-to-define-which-version-of-windows-is-installed-during-the-initial-setup" aria-label="Permalink to &quot;How/are we able to define which version of Windows is installed during the initial setup?&quot;">​</a></h2><p>ImmyBot doesn&#39;t install Windows on bare metal. The workflow is you unbox the system from Dell, HP, Lenovo, Microsoft, or your manufacturer of choice and insert the USB with the ImmyBot.ppkg file at the root while the machine is at the out of box screen.</p><p>We don&#39;t image the machine, we script the factory image into compliance.</p><p>We can, however, install Feature Updates during Onboarding (as well as after Onboarding)</p><h2 id="since-immy-bot-doesn-t-use-an-iso-does-it-require-a-device-to-have-the-ability-to-have-2-usb-devices-plugged-in-one-for-a-windows-iso-and-one-for-the-immybot-ppkg" tabindex="-1">Since Immy.Bot doesn’t use an ISO, does it require a device to have the ability to have 2 USB devices plugged in? One for a Windows ISO and one for the ImmyBot ppkg? <a class="header-anchor" href="#since-immy-bot-doesn-t-use-an-iso-does-it-require-a-device-to-have-the-ability-to-have-2-usb-devices-plugged-in-one-for-a-windows-iso-and-one-for-the-immybot-ppkg" aria-label="Permalink to &quot;Since Immy.Bot doesn’t use an ISO, does it require a device to have the ability to have 2 USB devices plugged in? One for a Windows ISO and one for the ImmyBot ppkg?&quot;">​</a></h2><p>If you want to wipe the computer you can use the Media Creation Tool to create a Windows Setup flash drive and then put our .ppkg file on it. After installing Windows, it will automatically apply the .ppkg</p><h2 id="does-immy-rely-on-the-windows-preboot-for-drivers-during-initial-deployment-or-does-the-immybot-agent-installer-have-drivers" tabindex="-1">Does Immy rely on the Windows preboot for drivers during initial deployment, or does the ImmyBot agent installer have drivers? <a class="header-anchor" href="#does-immy-rely-on-the-windows-preboot-for-drivers-during-initial-deployment-or-does-the-immybot-agent-installer-have-drivers" aria-label="Permalink to &quot;Does Immy rely on the Windows preboot for drivers during initial deployment, or does the ImmyBot agent installer have drivers?&quot;">​</a></h2><p>Since we are working with the manufacturer&#39;s image, all drivers are typically installed. We will automatically install Dell, HP, and Lenovo driver and BIOS updates via those manufacturer&#39;s tools (Dell Command, HP Image Assistant, Lenovo System Update)</p><h2 id="does-immy-s-setup-process-support-a-usb-nic-for-wifi-if-so-how-do-we-present-those-drivers-to-immy-or-do-we-even-need-to" tabindex="-1">Does Immy’s setup process support a USB NIC for WiFi? If so, how do we present those drivers to Immy, or do we even need to? <a class="header-anchor" href="#does-immy-s-setup-process-support-a-usb-nic-for-wifi-if-so-how-do-we-present-those-drivers-to-immy-or-do-we-even-need-to" aria-label="Permalink to &quot;Does Immy’s setup process support a USB NIC for WiFi?  If so, how do we present those drivers to Immy, or do we even need to?&quot;">​</a></h2><p>I&#39;ve found Windows has built in drivers for most USB NICs. If yours doesn&#39;t have drivers built into Windows, I&#39;d suggest purchasing one that does.</p><h2 id="sentinelone-how-do-we-define-which-site-immy-bot-places-the-agent-in-during-installation-of-the-s1-agent" tabindex="-1">SentinelOne - How do we define which site Immy.Bot places the agent in during installation of the S1 agent? <a class="header-anchor" href="#sentinelone-how-do-we-define-which-site-immy-bot-places-the-agent-in-during-installation-of-the-s1-agent" aria-label="Permalink to &quot;SentinelOne - How do we define which site Immy.Bot places the agent in during installation of the S1 agent?&quot;">​</a></h2><p>Supply ImmyBot with an API Key to SentinelOne, and Immy will look for a Site in your SentinelOne instance that matches the name of the Tenant you are onboarding the computer for.</p><h2 id="are-there-any-repository-limits-for-software-deployments-either-to-the-size-of-custom-software-or-number-of-custom-installers-we-can-upload" tabindex="-1">Are there any repository limits for software deployments? Either to the size of custom software or number of custom installers we can upload? <a class="header-anchor" href="#are-there-any-repository-limits-for-software-deployments-either-to-the-size-of-custom-software-or-number-of-custom-installers-we-can-upload" aria-label="Permalink to &quot;Are there any repository limits for software deployments?  Either to the size of custom software or number of custom installers we can upload?&quot;">​</a></h2><p>There are currently no limits. Everything you upload goes into an Azure Storage Account created just for your ImmyBot instance. Don&#39;t be the reason we can&#39;t have nice things.</p><h1 id="for-computer-rename-are-there-any-other-operators-we-can-use-when-naming-devices-other-then-the-ones-shown-can-we-add-operators" tabindex="-1">For computer rename, are there any other operators we can use when naming devices other then the ones shown? Can we add operators? <a class="header-anchor" href="#for-computer-rename-are-there-any-other-operators-we-can-use-when-naming-devices-other-then-the-ones-shown-can-we-add-operators" aria-label="Permalink to &quot;For computer rename, are there any other operators we can use when naming devices other then the ones shown? Can we add operators?&quot;">​</a></h1><p>You can duplicate the Task into your instance an manipulate it however you like. If it&#39;s something you think other MSPs could use, I&#39;d encourage you to submit a request on the <a href="https://community.immy.bot" target="_blank" rel="noreferrer">ImmyBot Community</a> and we can add it.</p><h2 id="employee-profile-caching-during-on-boarding-is-this-supported-if-so-how" tabindex="-1">Employee profile caching during on-boarding - is this supported? If so/how? <a class="header-anchor" href="#employee-profile-caching-during-on-boarding-is-this-supported-if-so-how" aria-label="Permalink to &quot;Employee profile caching during on-boarding - is this supported?  If so/how?&quot;">​</a></h2><p>ImmyBot will create a profile for the Primary Person you selected for this machine on the Onboarding screen (It does this via the &quot;Create Profile for Primary Person&quot; task)</p><p>We do this so subsequent tasks that set user level settings like default PDF handler and default browser, have the profile for the primary person and thus that user&#39;s HKCU where those settings live.</p><h2 id="for-purchasing-immy-do-you-guys-prefer-credit-card-or-invoice-would-you-rather-us-pay-monthly-or-can-we-pay-all-upfront" tabindex="-1">For purchasing Immy, do you guys prefer Credit card or invoice? Would you rather us pay monthly, or can we pay all upfront? <a class="header-anchor" href="#for-purchasing-immy-do-you-guys-prefer-credit-card-or-invoice-would-you-rather-us-pay-monthly-or-can-we-pay-all-upfront" aria-label="Permalink to &quot;For purchasing Immy, do you guys prefer Credit card or invoice? Would you rather us pay monthly, or can we pay all upfront?&quot;">​</a></h2><p>We prefer monthly credit card or ACH.</p><h2 id="is-immy-able-to-group-devices-and-then-do-role-based-deployments-to-them-i-assume-this-is-done-by-tags" tabindex="-1">Is Immy able to group devices and then do role based deployments to them? I assume this is done by tags? <a class="header-anchor" href="#is-immy-able-to-group-devices-and-then-do-role-based-deployments-to-them-i-assume-this-is-done-by-tags" aria-label="Permalink to &quot;Is Immy able to group devices and then do role based deployments to them? I assume this is done by tags?&quot;">​</a></h2><p>Yes, you would accomplish this with tags</p><h2 id="bitlocker-does-this-write-the-key-to-azure-ad-by-chance" tabindex="-1">BitLocker - does this write the key to Azure AD by chance? <a class="header-anchor" href="#bitlocker-does-this-write-the-key-to-azure-ad-by-chance" aria-label="Permalink to &quot;BitLocker - does this write the key to Azure AD by chance?&quot;">​</a></h2><p>Yes, but we can&#39;t verify that it is written to Azure AD as that would require additional privileges that our App Registration doesn&#39;t request.</p><p>We also write the Bitlocker Recovery Key to Active Directory for Domain Joined machines. This doesn&#39;t require any Group Policy setup, or line of site to the domain controller. This works as long as the machine is joined to a domain and there is a domain controller for that domain in ImmyBot.</p><h2 id="is-immy-able-to-reset-windows-wipe-and-reload-a-computer" tabindex="-1">Is Immy able to reset Windows / Wipe and Reload a computer? <a class="header-anchor" href="#is-immy-able-to-reset-windows-wipe-and-reload-a-computer" aria-label="Permalink to &quot;Is Immy able to reset Windows / Wipe and Reload a computer?&quot;">​</a></h2><p>Yes, the current process will be simplified but here&#39;s how to do it:</p><ol><li>Click Download ImmyAgent on the left to create a PPKG with the Windows Reset option selected</li></ol><p><img src="https://user-images.githubusercontent.com/1424395/235902691-46845e47-2965-4141-a68c-2004a02b7300.png" alt="image"></p><p><img src="https://user-images.githubusercontent.com/1424395/235902014-4a63dc2f-efe3-454c-a2f4-5c6578190982.png" alt="image"></p><ol start="2"><li>Create a Deployment for &quot;Apply Provisioning Package (PPKG)&quot; to deploy the PPKG to the specified machine</li></ol><p><img src="https://user-images.githubusercontent.com/1424395/235902286-5ad3303e-167c-4cd4-abb6-5dea45da3600.png" alt="image"></p><h2 id="immybot-agent-logs-show-an-error-of-the-specified-sas-token-is-expired" tabindex="-1">ImmyBot Agent logs show an error of &quot;The specified SAS token is expired&quot; <a class="header-anchor" href="#immybot-agent-logs-show-an-error-of-the-specified-sas-token-is-expired" aria-label="Permalink to &quot;ImmyBot Agent logs show an error of &quot;The specified SAS token is expired&quot;&quot;">​</a></h2><p>This will occur if the device&#39;s system time is incorrect. Ensure that the system time is correct and then restart the ImmyBot Agent Service.</p><h2 id="what-are-trusted-manufacturers" tabindex="-1">What are trusted manufacturers? <a class="header-anchor" href="#what-are-trusted-manufacturers" aria-label="Permalink to &quot;What are trusted manufacturers?&quot;">​</a></h2><p>Dell, HP, and Lenovo are considered trusted manufacturers. A trusted manufacturer is expected to provide unique serial numbers for their devices. We rely on trusted manufactuers and device serial numbers during device identification. If the agent reports it comes from a trusted manufacturer and a computer already exists inside ImmyBot with the same manufacturer and serial number, then we will automatically associated the agent with the existing computer.</p><h2 id="can-i-embed-the-immyagent-into-an-image" tabindex="-1">Can I embed the ImmyAgent into an image? <a class="header-anchor" href="#can-i-embed-the-immyagent-into-an-image" aria-label="Permalink to &quot;Can I embed the ImmyAgent into an image?&quot;">​</a></h2><p>Create a PPKG and place it in <code>C:\\Recovery\\Customizations</code>, create the folder if it doesn&#39;t exist.</p><p>You can also use <a href="https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/add-a-custom-script-to-windows-setup?view=windows-11" target="_blank" rel="noreferrer">SetupComplete</a> This method was confirmed working on Server 2022.</p><p>Place both the ImmyAgent EXE installer and the SetupComplete.cmd in the C:\\Windows\\Setup\\Scripts directory Content of SetupComplete.cmd can be as simple as: start C:\\Windows\\Setup\\Scripts\\ImmyAgentInstallerBundle.exe /qn</p><p>A member of the ImmyBot community also likes to use the below method to embedded a PPKG into an image:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>DISM.exe /Image:D:\\mount /Add-ProvisionedAppxPackage /PackagePath:C:\\Users\\Moi\\Downloads\\ImmyBotAgentInstaller.ppkg</span></span></code></pre></div><h2 id="do-you-take-requests-for-features-software-tasks-scripts" tabindex="-1">Do you take requests for features/software/tasks/scripts? <a class="header-anchor" href="#do-you-take-requests-for-features-software-tasks-scripts" aria-label="Permalink to &quot;Do you take requests for features/software/tasks/scripts?&quot;">​</a></h2><p>Yes, please feel welcome to submit a request on the <a href="https://community.immy.bot" target="_blank" rel="noreferrer">ImmyBot Community</a></p>`,104),r=[i];function s(l,h,d,m,u,c){return a(),t("div",null,r)}const f=e(n,[["render",s]]);export{y as __pageData,f as default};