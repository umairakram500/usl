import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { NumbersComponent } from './numbers/numbers.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReadMoreDirective } from './read-more.directive';

import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        AboutComponent,
        NumbersComponent,
        TeamComponent,
        TestimonialsComponent,
        ContactusComponent,
        PortfolioComponent,
        ServicesComponent,
        WhyChooseUsComponent,
        HeaderComponent,
        FooterComponent,
        
        ReadMoreDirective
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAE_9bGUXkGmhljqamF3oyIHJpSUN7FE7U'
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
