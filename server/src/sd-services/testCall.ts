let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
//append_imports_end
export class testCall {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'testCall';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new testCall(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_testCall_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: testCall');

    //appendnew_flow_testCall_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: testCall');

    this.app['get'](
      `${this.serviceBasePath}/schemas/:journey`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_bk2tNtfvUhCKmQkX(bh);
          //appendnew_next_sd_osNiy6MlgEgbhkLu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_osNiy6MlgEgbhkLu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/views/:journey`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_3lJ5WE8ZqOA5gM9x(bh);
          //appendnew_next_sd_eGSOcD107CYIIVys
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_eGSOcD107CYIIVys');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_testCall_HttpIn
  }
  //   service flows_testCall

  //appendnew_flow_testCall_start

  async sd_bk2tNtfvUhCKmQkX(bh) {
    try {
      bh.journey = bh.web.req.params.journey;

      bh = await this.sd_Q25GRzSgcsjIA7CN(bh);
      //appendnew_next_sd_bk2tNtfvUhCKmQkX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bk2tNtfvUhCKmQkX');
    }
  }

  async sd_Q25GRzSgcsjIA7CN(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.journey,
          'channel_1',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_KQUKrHJMqfFCe3GN(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Q25GRzSgcsjIA7CN');
    }
  }

  async sd_KQUKrHJMqfFCe3GN(bh) {
    try {
      bh.schema = {
        $id: 'https://example.com/object1666938433.json',
        title: 'Generated schema for Root',
        type: 'object',
        properties: {
          case: {
            type: 'object',
            properties: {
              basic: {
                type: 'object',
                properties: {
                  basicDetails: {
                    type: 'object',
                    properties: {
                      residentStatus: {
                        type: 'string',
                      },
                      stateOfResidence: {
                        type: 'string',
                      },
                      fullName: {
                        type: 'string',
                      },
                      mobileNumber: {
                        type: 'string',
                        minLength: 10,
                        maxLength: 10,
                        pattern: '^[0-9]*$',
                      },
                      email: {
                        type: 'string',
                        // require '@' && require '.'
                      },
                      dob: {
                        type: 'string',
                      },
                      gender: {
                        type: 'string',
                      },
                      panCard: {
                        type: 'string',
                      },
                      education: {
                        type: 'string',
                      },
                      occupation: {
                        type: 'string',
                      },
                      annualIncome: {
                        type: 'number',
                      },
                      smokerStatus: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
              quote: {
                type: 'object',
                properties: {
                  quoteDetails: {
                    type: 'object',
                    properties: {
                      planOptions: {
                        type: 'radio',
                      },
                      sumAssured: {
                        type: 'number',
                      },
                      term: {
                        type: 'string',
                      },
                      ppt: {
                        type: 'string',
                      },
                      frequency: {
                        type: 'string',
                      },
                      addOns: {
                        type: 'string',
                      },
                      riders: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
              personal: {
                type: 'object',
                properties: {
                  personalDetails: {
                    type: 'object',
                    properties: {
                      height: {
                        type: 'number',
                      },
                      weight: {
                        type: 'number',
                      },
                      maritalStatus: {
                        type: 'string',
                      },
                      maidenName: {
                        type: 'string',
                      },
                      wifesName: {
                        type: 'string',
                      },
                    },
                  },
                  occupationDetails: {
                    type: 'object',
                    properties: {
                      industryType: {
                        type: 'string',
                      },
                      employerName: {
                        type: 'string',
                      },
                      industry: {
                        type: 'string',
                      },
                      designation: {
                        type: 'string',
                      },
                      workplaceCountry: {
                        type: 'string',
                      },
                      pinCode: {
                        type: 'number',
                      },
                      natureOfWork: {
                        type: 'string',
                      },
                      harmfulExposure: {
                        type: 'string',
                      },
                      sourceOfFund: {
                        type: 'string',
                      },
                    },
                  },
                  addressDetails: {
                    type: 'object',
                    properties: {
                      house: {
                        type: 'number',
                      },
                      street: {
                        type: 'string',
                      },
                      landmark: {
                        type: 'string',
                      },
                      pinCode: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
              declaration: {
                type: 'object',
                properties: {
                  declarations: {
                    type: 'object',
                    properties: {
                      lifestyle: {
                        type: 'string',
                      },
                      previousPolicies: {
                        type: 'string',
                      },
                      medical: {
                        type: 'string',
                      },
                      others: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
              documents: {
                type: 'object',
                properties: {},
              },
              payment: {
                type: 'object',
                properties: {
                  neftDetails: {
                    type: 'object',
                    properties: {
                      holderName: {
                        type: 'string',
                      },
                      accountNumber: {
                        type: 'number',
                      },
                      ifscCode: {
                        type: 'number',
                      },
                      accountType: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      };

      bh = await this.sd_DrCw4hiXaLjjAPy8(bh);
      //appendnew_next_sd_KQUKrHJMqfFCe3GN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KQUKrHJMqfFCe3GN');
    }
  }

  async sd_DrCw4hiXaLjjAPy8(bh) {
    try {
      bh.web.res.status(200).send(bh.schema);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DrCw4hiXaLjjAPy8');
    }
  }

  async sd_3lJ5WE8ZqOA5gM9x(bh) {
    try {
      bh.journey = bh.web.req.params.journey;
      bh = await this.sd_ZHxHqa1dhRdGn5Xm(bh);
      //appendnew_next_sd_3lJ5WE8ZqOA5gM9x
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3lJ5WE8ZqOA5gM9x');
    }
  }

  async sd_ZHxHqa1dhRdGn5Xm(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.journey,
          'channel_1',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Qg1DZfVVo4kMTw2E(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZHxHqa1dhRdGn5Xm');
    }
  }

  async sd_Qg1DZfVVo4kMTw2E(bh) {
    try {
      bh.schema = {
        $id: 'https://example.com/object1666938433.json',
        title: 'Generated schema for Root',
        type: 'object',
        properties: {
          case: {
            type: 'object',
            properties: {
              basic: {
                type: 'object',
                properties: {
                  basicDetails: {
                    type: 'object',
                    properties: {
                      residentStatus: {
                        type: 'string',
                      },
                      stateOfResidence: {
                        type: 'string',
                      },
                      fullName: {
                        type: 'string',
                      },
                      mobileNumber: {
                        type: 'string',
                        minLength: 10,
                        maxLength: 10,
                        pattern: '^[0-9]*$',
                      },
                      email: {
                        type: 'string',
                        // require '@' && require '.'
                      },
                      dob: {
                        type: 'string',
                      },
                      gender: {
                        type: 'string',
                      },
                      panCard: {
                        type: 'string',
                      },
                      education: {
                        type: 'string',
                      },
                      occupation: {
                        type: 'string',
                      },
                      annualIncome: {
                        type: 'number',
                      },
                      smokerStatus: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
              quote: {
                type: 'object',
                properties: {
                  quoteDetails: {
                    type: 'object',
                    properties: {
                      planOptions: {
                        type: 'radio',
                      },
                      sumAssured: {
                        type: 'number',
                      },
                      term: {
                        type: 'string',
                      },
                      ppt: {
                        type: 'string',
                      },
                      frequency: {
                        type: 'string',
                      },
                      addOns: {
                        type: 'string',
                      },
                      riders: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
              personal: {
                type: 'object',
                properties: {
                  personalDetails: {
                    type: 'object',
                    properties: {
                      height: {
                        type: 'number',
                      },
                      weight: {
                        type: 'number',
                      },
                      maritalStatus: {
                        type: 'string',
                      },
                      maidenName: {
                        type: 'string',
                      },
                      wifesName: {
                        type: 'string',
                      },
                    },
                  },
                  occupationDetails: {
                    type: 'object',
                    properties: {
                      industryType: {
                        type: 'string',
                      },
                      employerName: {
                        type: 'string',
                      },
                      industry: {
                        type: 'string',
                      },
                      designation: {
                        type: 'string',
                      },
                      workplaceCountry: {
                        type: 'string',
                      },
                      pinCode: {
                        type: 'number',
                      },
                      natureOfWork: {
                        type: 'string',
                      },
                      harmfulExposure: {
                        type: 'string',
                      },
                      sourceOfFund: {
                        type: 'string',
                      },
                    },
                  },
                  addressDetails: {
                    type: 'object',
                    properties: {
                      house: {
                        type: 'number',
                      },
                      street: {
                        type: 'string',
                      },
                      landmark: {
                        type: 'string',
                      },
                      pinCode: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
              declaration: {
                type: 'object',
                properties: {
                  declarations: {
                    type: 'object',
                    properties: {
                      lifestyle: {
                        type: 'string',
                      },
                      previousPolicies: {
                        type: 'string',
                      },
                      medical: {
                        type: 'string',
                      },
                      others: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
              documents: {
                type: 'object',
                properties: {},
              },
              payment: {
                type: 'object',
                properties: {
                  neftDetails: {
                    type: 'object',
                    properties: {
                      holderName: {
                        type: 'string',
                      },
                      accountNumber: {
                        type: 'number',
                      },
                      ifscCode: {
                        type: 'number',
                      },
                      accountType: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      };

      bh = await this.sd_snQM6aM9EZMBrNVX(bh);
      //appendnew_next_sd_Qg1DZfVVo4kMTw2E
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Qg1DZfVVo4kMTw2E');
    }
  }

  async sd_snQM6aM9EZMBrNVX(bh) {
    try {
      bh.web.res.status(200).send(bh.schema.properties.case.properties);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_snQM6aM9EZMBrNVX');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_testCall_Catch
}
