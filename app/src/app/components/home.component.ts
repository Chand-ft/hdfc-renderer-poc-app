/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { dynamicrendererService } from '../services/dynamicrenderer/dynamicrenderer.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_nt1YQ6lKj0Sc8fvg(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_nt1YQ6lKj0Sc8fvg(bh) {
    try {
      bh = this.sd_n8mArbC24WYIXHr9(bh);
      //appendnew_next_sd_nt1YQ6lKj0Sc8fvg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nt1YQ6lKj0Sc8fvg');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_n8mArbC24WYIXHr9(bh) {
    try {
      bh = this.sd_yweFL9CnvEBQtM9T(bh);
      //appendnew_next_sd_n8mArbC24WYIXHr9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n8mArbC24WYIXHr9');
    }
  }

  sd_yweFL9CnvEBQtM9T(bh) {
    try {
      this.page.dynamicrenderer = this.__page_injector__.get(
        dynamicrendererService
      );
      //appendnew_next_sd_yweFL9CnvEBQtM9T
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yweFL9CnvEBQtM9T');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_homeComponent_Catch
}
