export interface LoginRequest {
  identifier: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  jwt: string;
  user: User;
}

export interface ErrorResponse {
  error: {
    status: number;
    name: string;
    message: string;
    details?: object;
  };
}

export interface RegistrationRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegistrationResponse {
  jwt: string;
  user: User;
}

export interface components {
  schemas: {
    Error: {
      data?: Record<string, never> | Record<string, never>[];
      error: {
        status?: number;
        name?: string;
        message?: string;
        details?: Record<string, never>;
      };
    };
    BebidaRequest: {
      data: {
        nome?: string;
        /** Format: float */
        preco?: number;
      };
    };
    BebidaListResponseDataItem: {
      id?: number;
      attributes?: components["schemas"]["Bebida"];
    };
    BebidaListResponse: {
      data?: components["schemas"]["BebidaListResponseDataItem"][];
      meta?: {
        pagination?: {
          page?: number;
          pageSize?: number;
          pageCount?: number;
          total?: number;
        };
      };
    };
    Bebida: {
      nome?: string;
      /** Format: float */
      preco?: number;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      /** Format: date-time */
      publishedAt?: string;
      createdBy?: {
        data?: {
          id?: number;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            /** Format: email */
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: {
                id?: number;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    }[];
                  };
                  permissions?: {
                    data?: {
                      id?: number;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: unknown;
                        conditions?: unknown;
                        role?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                      };
                    }[];
                  };
                  /** Format: date-time */
                  createdAt?: string;
                  /** Format: date-time */
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                };
              }[];
            };
            blocked?: boolean;
            preferedLanguage?: string;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
            updatedBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: number;
          attributes?: Record<string, never>;
        };
      };
    };
    BebidaResponseDataObject: {
      id?: number;
      attributes?: components["schemas"]["Bebida"];
    };
    BebidaResponse: {
      data?: components["schemas"]["BebidaResponseDataObject"];
      meta?: Record<string, never>;
    };
    CardapioRequest: {
      data: {
        pizzas?: (number | string)[];
        bebidas?: (number | string)[];
        combos?: (number | string)[];
      };
    };
    CardapioListResponseDataItem: {
      id?: number;
      attributes?: components["schemas"]["Cardapio"];
    };
    CardapioListResponse: {
      data?: components["schemas"]["CardapioListResponseDataItem"][];
      meta?: {
        pagination?: {
          page?: number;
          pageSize?: number;
          pageCount?: number;
          total?: number;
        };
      };
    };
    Cardapio: {
      pizzas?: {
        data?: {
          id?: number;
          attributes?: {
            sabor?: string;
            tamanho?: number;
            /** Format: float */
            preco?: number;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: number;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  /** Format: email */
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: number;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: number;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: unknown;
                              conditions?: unknown;
                              role?: {
                                data?: {
                                  id?: number;
                                  attributes?: Record<string, never>;
                                };
                              };
                              /** Format: date-time */
                              createdAt?: string;
                              /** Format: date-time */
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: number;
                                  attributes?: Record<string, never>;
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: number;
                                  attributes?: Record<string, never>;
                                };
                              };
                            };
                          }[];
                        };
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  /** Format: date-time */
                  createdAt?: string;
                  /** Format: date-time */
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
          };
        }[];
      };
      bebidas?: {
        data?: {
          id?: number;
          attributes?: {
            nome?: string;
            /** Format: float */
            preco?: number;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
            updatedBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
          };
        }[];
      };
      combos?: {
        data?: {
          id?: number;
          attributes?: {
            bebidas?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              }[];
            };
            sabores?: {
              data?: {
                id?: number;
                attributes?: {
                  nome?: string;
                  /** Format: float */
                  preco?: number;
                  /** Format: date-time */
                  createdAt?: string;
                  /** Format: date-time */
                  updatedAt?: string;
                  /** Format: date-time */
                  publishedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                };
              }[];
            };
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
            updatedBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
          };
        }[];
      };
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      /** Format: date-time */
      publishedAt?: string;
      createdBy?: {
        data?: {
          id?: number;
          attributes?: Record<string, never>;
        };
      };
      updatedBy?: {
        data?: {
          id?: number;
          attributes?: Record<string, never>;
        };
      };
    };
    CardapioResponseDataObject: {
      id?: number;
      attributes?: components["schemas"]["Cardapio"];
    };
    CardapioResponse: {
      data?: components["schemas"]["CardapioResponseDataObject"];
      meta?: Record<string, never>;
    };
    ComboRequest: {
      data: {
        bebidas?: (number | string)[];
        sabores?: (number | string)[];
      };
    };
    ComboListResponseDataItem: {
      id?: number;
      attributes?: components["schemas"]["Combo"];
    };
    ComboListResponse: {
      data?: components["schemas"]["ComboListResponseDataItem"][];
      meta?: {
        pagination?: {
          page?: number;
          pageSize?: number;
          pageCount?: number;
          total?: number;
        };
      };
    };
    Combo: {
      bebidas?: {
        data?: {
          id?: number;
          attributes?: {
            nome?: string;
            /** Format: float */
            preco?: number;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: number;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  /** Format: email */
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: number;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: number;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: unknown;
                              conditions?: unknown;
                              role?: {
                                data?: {
                                  id?: number;
                                  attributes?: Record<string, never>;
                                };
                              };
                              /** Format: date-time */
                              createdAt?: string;
                              /** Format: date-time */
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: number;
                                  attributes?: Record<string, never>;
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: number;
                                  attributes?: Record<string, never>;
                                };
                              };
                            };
                          }[];
                        };
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  /** Format: date-time */
                  createdAt?: string;
                  /** Format: date-time */
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
          };
        }[];
      };
      sabores?: {
        data?: {
          id?: number;
          attributes?: {
            nome?: string;
            /** Format: float */
            preco?: number;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
            updatedBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
          };
        }[];
      };
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      /** Format: date-time */
      publishedAt?: string;
      createdBy?: {
        data?: {
          id?: number;
          attributes?: Record<string, never>;
        };
      };
      updatedBy?: {
        data?: {
          id?: number;
          attributes?: Record<string, never>;
        };
      };
    };
    ComboResponseDataObject: {
      id?: number;
      attributes?: components["schemas"]["Combo"];
    };
    ComboResponse: {
      data?: components["schemas"]["ComboResponseDataObject"];
      meta?: Record<string, never>;
    };
    PedidoRequest: {
      data: {
        bebidas?: (number | string)[];
        sabores?: (number | string)[];
        combos?: (number | string)[];
      };
    };
    PedidoListResponseDataItem: {
      id?: number;
      attributes?: components["schemas"]["Pedido"];
    };
    PedidoListResponse: {
      data?: components["schemas"]["PedidoListResponseDataItem"][];
      meta?: {
        pagination?: {
          page?: number;
          pageSize?: number;
          pageCount?: number;
          total?: number;
        };
      };
    };
    Pedido: {
      bebidas?: {
        data?: {
          id?: number;
          attributes?: {
            nome?: string;
            /** Format: float */
            preco?: number;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: number;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  /** Format: email */
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: number;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: number;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: unknown;
                              conditions?: unknown;
                              role?: {
                                data?: {
                                  id?: number;
                                  attributes?: Record<string, never>;
                                };
                              };
                              /** Format: date-time */
                              createdAt?: string;
                              /** Format: date-time */
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: number;
                                  attributes?: Record<string, never>;
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: number;
                                  attributes?: Record<string, never>;
                                };
                              };
                            };
                          }[];
                        };
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  /** Format: date-time */
                  createdAt?: string;
                  /** Format: date-time */
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
          };
        }[];
      };
      sabores?: {
        data?: {
          id?: number;
          attributes?: {
            nome?: string;
            /** Format: float */
            preco?: number;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
            updatedBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
          };
        }[];
      };
      combos?: {
        data?: {
          id?: number;
          attributes?: {
            bebidas?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              }[];
            };
            sabores?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              }[];
            };
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
            updatedBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
          };
        }[];
      };
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      /** Format: date-time */
      publishedAt?: string;
      createdBy?: {
        data?: {
          id?: number;
          attributes?: Record<string, never>;
        };
      };
      updatedBy?: {
        data?: {
          id?: number;
          attributes?: Record<string, never>;
        };
      };
    };
    PedidoResponseDataObject: {
      id?: number;
      attributes?: components["schemas"]["Pedido"];
    };
    PedidoResponse: {
      data?: components["schemas"]["PedidoResponseDataObject"];
      meta?: Record<string, never>;
    };
    PizzaRequest: {
      data: {
        sabor?: string;
        tamanho?: number;
        /** Format: float */
        preco?: number;
      };
    };
    PizzaListResponseDataItem: {
      id?: number;
      attributes?: components["schemas"]["Pizza"];
    };
    PizzaListResponse: {
      data?: components["schemas"]["PizzaListResponseDataItem"][];
      meta?: {
        pagination?: {
          page?: number;
          pageSize?: number;
          pageCount?: number;
          total?: number;
        };
      };
    };
    Pizza: {
      sabor?: string;
      tamanho?: number;
      /** Format: float */
      preco?: number;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      /** Format: date-time */
      publishedAt?: string;
      createdBy?: {
        data?: {
          id?: number;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            /** Format: email */
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: {
                id?: number;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    }[];
                  };
                  permissions?: {
                    data?: {
                      id?: number;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: unknown;
                        conditions?: unknown;
                        role?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                      };
                    }[];
                  };
                  /** Format: date-time */
                  createdAt?: string;
                  /** Format: date-time */
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                };
              }[];
            };
            blocked?: boolean;
            preferedLanguage?: string;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
            updatedBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: number;
          attributes?: Record<string, never>;
        };
      };
    };
    PizzaResponseDataObject: {
      id?: number;
      attributes?: components["schemas"]["Pizza"];
    };
    PizzaResponse: {
      data?: components["schemas"]["PizzaResponseDataObject"];
      meta?: Record<string, never>;
    };
    SaborRequest: {
      data: {
        nome?: string;
        /** Format: float */
        preco?: number;
      };
    };
    SaborListResponseDataItem: {
      id?: number;
      attributes?: components["schemas"]["Sabor"];
    };
    SaborListResponse: {
      data?: components["schemas"]["SaborListResponseDataItem"][];
      meta?: {
        pagination?: {
          page?: number;
          pageSize?: number;
          pageCount?: number;
          total?: number;
        };
      };
    };
    Sabor: {
      nome?: string;
      /** Format: float */
      preco?: number;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      /** Format: date-time */
      publishedAt?: string;
      createdBy?: {
        data?: {
          id?: number;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            /** Format: email */
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: {
                id?: number;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    }[];
                  };
                  permissions?: {
                    data?: {
                      id?: number;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: unknown;
                        conditions?: unknown;
                        role?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                        /** Format: date-time */
                        createdAt?: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: number;
                            attributes?: Record<string, never>;
                          };
                        };
                      };
                    }[];
                  };
                  /** Format: date-time */
                  createdAt?: string;
                  /** Format: date-time */
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: number;
                      attributes?: Record<string, never>;
                    };
                  };
                };
              }[];
            };
            blocked?: boolean;
            preferedLanguage?: string;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
            updatedBy?: {
              data?: {
                id?: number;
                attributes?: Record<string, never>;
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: number;
          attributes?: Record<string, never>;
        };
      };
    };
    SaborResponseDataObject: {
      id?: number;
      attributes?: components["schemas"]["Sabor"];
    };
    SaborResponse: {
      data?: components["schemas"]["SaborResponseDataObject"];
      meta?: Record<string, never>;
    };
    UploadFile: {
      id?: number;
      name?: string;
      alternativeText?: string;
      caption?: string;
      /** Format: integer */
      width?: number;
      /** Format: integer */
      height?: number;
      formats?: number;
      hash?: string;
      ext?: string;
      mime?: string;
      /** Format: double */
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: Record<string, never>;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    "Users-Permissions-Role": {
      id?: number;
      name?: string;
      description?: string;
      type?: string;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    "Users-Permissions-User": {
      /** @example 1 */
      id?: number;
      /** @example foo.bar */
      username?: string;
      /** @example foo.bar@strapi.io */
      email?: string;
      /** @example local */
      provider?: string;
      /** @example true */
      confirmed?: boolean;
      /** @example false */
      blocked?: boolean;
      /**
       * Format: date-time
       * @example 2022-06-02T08:32:06.258Z
       */
      createdAt?: string;
      /**
       * Format: date-time
       * @example 2022-06-02T08:32:06.267Z
       */
      updatedAt?: string;
    };
    "Users-Permissions-UserRegistration": {
      /** @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c */
      jwt?: string;
      user?: components["schemas"]["Users-Permissions-User"];
    };
    "Users-Permissions-PermissionsTree": {
      [key: string]:
        | {
            /** @description every controller of the api */
            controllers?: {
              [key: string]:
                | {
                    [key: string]:
                      | {
                          enabled?: boolean;
                          policy?: string;
                        }
                      | undefined;
                  }
                | undefined;
            };
          }
        | undefined;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: {
    "Users-Permissions-RoleRequest": {
      content: {
        /**
         * @example {
         *   "name": "foo",
         *   "description": "role foo",
         *   "permissions": {
         *     "api::content-type.content-type": {
         *       "controllers": {
         *         "controllerA": {
         *           "find": {
         *             "enabled": true
         *           }
         *         }
         *       }
         *     }
         *   }
         * }
         */
        "application/json": {
          name?: string;
          description?: string;
          type?: string;
          permissions?: components["schemas"]["Users-Permissions-PermissionsTree"];
        };
      };
    };
  };
  headers: never;
  pathItems: never;
}
