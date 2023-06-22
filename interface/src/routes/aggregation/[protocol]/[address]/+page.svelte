<script>

    import { Col, Container, Row } from "sveltestrap";
import Aggregation from "./_form/Aggregation.svelte";
    import Side from "./_log/Side.svelte";
	import HeadeNavi from "$lib/elements/HeadeNavi.svelte";

/**
 * @type {import("src/relay_types/logs.d.ts").Logs}
 */
const logs = [
    {
        block:2042,
        log: "this is test logger 1",
        logger: "abafwlwydsmst",
        origin: "afwertlwergferw",
        sender: "0xabcdefgawtnp345",
        timestamp:203754789
        
    }, 
    {
        block: 2042,
        log: "this is test logger 2",
        logger: "abafwlwydsmst",
        origin: "afwertlwergferw",
        sender: "0xabcdefgawtnp345",
        timestamp: 203754789

    },
        {
        block:2043,
        log: "this is test logger group 2 log 1",
        logger: "abafwlwydsmst",
        origin: "afwertlwergferw",
        sender: "0xabcdefgawtnp345",
        timestamp:203754789
        
    }, 
    {
        block: 2043,
        log: "this is test logger group 2  2",
        logger: "abafwlwydsmst",
        origin: "afwertlwergferw",
        sender: "0x50fgaawtnpbcd",
        timestamp: 203754789

    }

]
    /**
 * @type {import("src/relay_types/aggregation").Aggregation}
 */
const aggregation = {
    description:"this is test",
    website:{url:"https//test.example.com"},
    origin:{
      name:"Ideal Chain",
      address:"afwertlwergferw",      
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
        about:"sender contract 1",
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
        about: "sender contract 2",
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
              address:"0xIdealOracle",
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
          address: "0x50fgaawtnpbcd",
        },
        website: {
          url: "http://sample.example.com"
        }


      }
    ]
}

</script>
<HeadeNavi></HeadeNavi>
<Container fluid >
    <Row class="mt-5">
        <Col md=7 >
            <div class="bg-white border border-primary-subtle mx-2 p-2" >
                 <Aggregation aggregation={aggregation}></Aggregation>
            </div>
           
        </Col>
        <Col md=5>
            <div class="bg-white border border-primary-subtle mx-2 p-2" >
                <Side logs={logs}></Side>
            </div>
        </Col>                       
    </Row>    
</Container>
