export const environment : any = {
  production: true,
  backendEndpoint: 'http://oscarvx00.ddns.net:31001',
  modules : {
    searchName : {
      enabled: false,
      path: 'search'
    },
    youtube: {
      enabled : false,
      path: 'youtube'
    },
    soundcloud: {
      enabled : true,
      path: 'soundcloud'
    },
    spotify : {
      enabled: false,
      path: 'spotify'
    }
  }
};
