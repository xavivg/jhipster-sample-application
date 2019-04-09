import { NgModule } from '@angular/core';

import { HobbygerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HobbygerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HobbygerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HobbygerSharedCommonModule {}
