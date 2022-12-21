/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { NDynamicRendererModule } from 'n-dynamic-renderer';
import {inputComponent}  from '../../components/input.component';
import { dropdownComponent } from '../../components/dropdown.component';
import { datepickerComponent } from '../../components/datepicker.component'

@Injectable()
export class ndynamicrenderermoduleService {
    rendererImports;
    nComponentModules
    constructor(private NDynamicRendererModule: NDynamicRendererModule) {
    }

      resetRendererComponents() {
        let config = [
            {
                library: "home",
                imports: {
                   "inputComponent": inputComponent,
                   "dropdownComponent": dropdownComponent,
                   "datepickerComponent": datepickerComponent,
                },}
        ];
        this.NDynamicRendererModule.resetConfig(config);
    }

}
