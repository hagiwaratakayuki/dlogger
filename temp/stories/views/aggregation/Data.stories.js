import _Data from './Data.svelte';

export default {
  title: 'Aggregation',
  component: _Data,
  
};
/**
 * @type {import("../../../relay_types/aggregation").Aggregation}
 */
const aggregation = {
    description:"this is test",
    website:{url:"https//test.example.com"},
    origin:{
      name:"Ideal Chain",
      address:"adBcdesfrg",      
    },
    audit:[
      {
        linkType:"website",
        url:"https//test.example.com",
      },
      {
        linkType:"protocolAddress",
        name:"Ideal Cahin",
        address:"0xabcdefgawtnp345",
      }

    ],
    logger:{
      
      audit:[
        {
          linkType:"website",
          url:"https://test.example.com",
        }
      ],
      name:"Test Logger",
      about:"this is test",
      protocol:{       
        address:"Awegowrgknacf",
        name:"Ideal Chain"
      },
      oracles:[],
      website:undefined,
      isSender:undefined
      



    },
    contracts: [
      {
        about:"not sender contract",
        isSender:false,
        audit:[{
          linkType:"website",
          url:"http://audit.contract.test.com"
        }],
        oracles:[],
        name:"test Contract1",
        protocol:{
          name:"ideal protocol",
          address:"Adssadgsggr",
        },
        website:{
          url:"http://sample.example.com"
        }
    
      
      },
       {
        about: "not sender contract",
        isSender: false,
        audit: [{
          linkType: "website",
          url: "http://audit.contract.test.com"
        }],
        oracles: [
          {
            name:"test oracle",
            website:{
              url:"http:test.example.com"
            },
            protocol:{
              name:"ideal protocol",
              address:"Ideal Oracle",
            },
            audit:[
              {
                linkType: "website",
                url: "https://test.example.com",
              }
            ]
          }
        ],
        name: "test Contract1",
        protocol: {
          name: "ideal protocol",
          address: "Adssadgsggr",
        },
        website: {
          url: "http://sample.example.com"
        }


      }
    ]
}


export const Data = {
  args: {
    aggregation
  },
};

