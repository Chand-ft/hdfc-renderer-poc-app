//__IMPORT_MODULES_HERE__
//__LIBRARY__n\-dynamic\-renderer
import {NDynamicRendererModule} from 'n-dynamic-renderer';
//__END__LIBRARY__n\-dynamic\-renderer
import {NgModule } from '@angular/core';
import { sdProviders} from './sd-providers';
import { environment } from 'environments/environment';
@NgModule({
  imports: [
    //__CUSTOM_IMPORTS_MODULES__
    //__CUSTOM_IMPORTS_MODULES_END__
    //__IMPORTS_MODULES__
    
//__IMPORTED_MODULE__NDynamicRendererModule
NDynamicRendererModule.forRoot(),
//__IMPORTED_MODULE__NDynamicRendererModule__END
//__IMPORTS_MODULES_END__
  ],
  providers: [...sdProviders],
  exports: [
    //__EXPORTS_MODULES__
    
//__EXPORTED_MODULE__NDynamicRendererModule
NDynamicRendererModule,
//__EXPORTED_MODULE__NDynamicRendererModule__END
//__EXPORTS_MODULES_END__
  ]
})
export class DependenciesModule { }