import { Component, OnInit } from '@angular/core';
import { Experience } from './experience';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {

  step = 0;

  experience: Experience = {
    name: 'Doug Williamson',
    position: 'Software Developer',
    // tslint:disable-next-line:max-line-length
    description: 'A results-oriented, energetic software developer with concentrations in OOP and SOA methodologies with full-stack experience. Knowledgeable in the primary functions of systems analysis and design, with career exposure in financial, telecommunications, insurance and mortgage industries. An open-minded, dedicated team player with the ability to develop and deliver agile solutions in iterative planning environments. Experienced in mentorship, collaborating with UX and Product Management teams to fill backlogs, plan work and innovate on a regular basis.',
    jobs: [
      {
        name: 'Hyland Software',
        dates: 'Dec 2014 - Present',
        // tslint:disable-next-line:max-line-length
        description: 'Worked on the initial version of ShareBase (Enterprise File Sync/Share) web app, including AngularJS/Bootstrap. Transitioned product to utilize Google’s Material Design. Acting as lead developer on Angular rewrite of Combined Viewer insurance portfolio, collaborating with core components team to deliver shareable components including authentication, translations, app shells and document lists/viewers. Collaborating with experimental components team to deliver shareable components to quickly stand up proof-of-concepts, working with UX designers to deliver responsive, intuitive user experiences.',
        id: 1,
        attributes: [
          { type: 'primary', name: 'Angular', url: 'https://angular.io'},
          { type: 'accent', name: 'Visual Studio Code', url: 'https://code.visualstudio.com/' },
          { type: undefined, name: 'GitHub', url: 'https://github.com/' },
          { type: undefined, name: 'NPM', url: 'https://www.npmjs.com/'},
          { type: undefined, name: 'Agile', url: 'https://www.atlassian.com/agile' },
          { type: undefined, name: 'SaaS', url: 'https://en.wikipedia.org/wiki/Software_as_a_service'}
        ]
      },
      {
        name: 'D+H',
        dates: 'Oct 2010 - Nov 2014',
        // tslint:disable-next-line:max-line-length
        description: 'Maintain full-stack enterprise legacy system, including VB.Net client-side applications and SOAP server-side applications. Assisted CTO with quarterly software releases and various Systems Administration roles. Post-acquisition (formerly Avista Solutions), contributed to enterprise application rewrites, including C#/AngularJS/Bootstrap MVC client-side and WCF/XML server-side. Collaboration with Product Owners and QA in two-week iterative sprints.',
        id: 2,
        attributes: [
          { type: 'primary', name: 'C#', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
          { type: 'primary', name: 'VB.Net', url: 'https://en.wikipedia.org/wiki/Visual_Basic_.NET' },
          { type: 'primary', name: 'SQL', url: 'https://en.wikipedia.org/wiki/SQL' },
          { type: 'accent', name: 'Visual Studio', url: 'https://visualstudio.microsoft.com/' },
          { type: 'accent', name: 'SQL Server', url: 'https://www.microsoft.com/en-us/sql-server/default.aspx' },
          { type: undefined, name: 'ASP.Net MVC' , url: 'https://dotnet.microsoft.com/apps/aspnet/mvc'},
          { type: undefined, name: 'SaaS', url: 'https://en.wikipedia.org/wiki/Software_as_a_service'}
        ]
      },
      {
        name: 'AmTrust Financial',
        dates: 'May 2007 - Oct 2010',
        // tslint:disable-next-line:max-line-length
        description: 'Created and maintained internal VB.Net administration portal, supporting a host of online insurance customizations. Inherited and added to core business multi-line insurance quotation system, including customization of insurance agent web interfaces and an ever changing ISO regulated rating engine, using a 3-tiered modeling approach in a VB.Net portal.',
        id: 3,
        attributes: [
          { type: 'primary', name: 'C#', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
          { type: 'primary', name: 'ASP.Net' , url: 'https://dotnet.microsoft.com/apps/aspnet'},
          { type: 'primary', name: 'SQL' , url: 'https://en.wikipedia.org/wiki/SQL'},
          { type: 'accent', name: 'Visual Studio', url: 'https://visualstudio.microsoft.com/' },
          { type: 'accent', name: 'SQL Server', url: 'https://www.microsoft.com/en-us/sql-server/default.aspx' },
        ]
      },
      {
        name: 'InfoCision Management Corp',
        dates: 'Nov 2004 - May 2007',
        // tslint:disable-next-line:max-line-length
        description: 'Maintained and developed telemarketers call screens (VB6 Windows Forms) for Commercial clients. Inspected, cleaned and modeled client-provided data for outbound calling, as well as provided post-call SSRS reporting in fast paced client campaigns.',
        id: 4,
        attributes: [
          { type: 'primary', name: 'Visual Basic 6', url: 'https://en.wikipedia.org/wiki/Visual_Basic' },
          { type: 'primary', name: 'SQL' , url: 'https://en.wikipedia.org/wiki/SQL'},
          { type: 'accent', name: 'SQL Server Reporting Services', url: 'https://en.wikipedia.org/wiki/SQL_Server_Reporting_Services' },
          { type: 'accent', name: 'Visual Studio' , url: 'https://visualstudio.microsoft.com/'},
          { type: 'accent', name: 'FoxPro', url: 'https://en.wikipedia.org/wiki/FoxPro' },
        ]
      },
    ],
  }

  constructor(public media: MediaObserver) {}

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  goToLink(url: string) {
    console.log(url);
    window.open(url, '_blank');
  }

}
