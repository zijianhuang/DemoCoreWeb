import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        AppModuleShared
    ],
    providers: [
        { provide: 'baseUrl', useFactory: getBaseUrl }
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
