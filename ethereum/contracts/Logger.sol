// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.9;

contract Logger {

  // Map to store the key-value pairs
  mapping(bytes32 => uint256) public heads;
  uint256 public count = 1;

  // Function to generate the key
  function generateKey() private view returns (bytes32) {
    
    return keccak256(abi.encodePacked(tx.origin, msg.sender));
  }

  // Function to save the key-value pair
  function saveHead(bytes32 key, uint256 id) private {
    heads[key] = id;
  }
 

  struct Object{
    uint256 prev;
    string log;
    uint blockNumber;
    uint timeStamp;
  }

  
  mapping (uint256 => Object) public objects;

  event onAddLog(string log, bytes20 origin,  bytes20 caller, uint block, uint timestamp, bytes20 logger);

  function addLog(string memory log) public returns (bool) {
    
    bytes32 key = generateKey();
    uint256 prev = heads[key];
    uint256 id = count;
 

    saveHead(key, id);
    count = count + 1;
   
    Object memory object = Object(prev, log, block.number,  block.timestamp);
    
    objects[id] = object;
    emit onAddLog(log, bytes20(tx.origin), bytes20(msg.sender), block.number, block.timestamp, bytes20(address(this)));
    return true;

    
  }
  function readLog(bytes20 origin, bytes20 sender, uint256 start) public view returns (Object[10] memory, uint256) {
    Object[10] memory result;
   
    uint256 head = start;
    
    if (head == 0) {
        address _origin = address(origin);
        address _sender = address(sender);
        bytes32 key = keccak256(abi.encodePacked( _origin, _sender));
        head = heads[key];
        


    }
    
    
    if (head == 0) {
      return (result, head); 

    }
    
    
    for (uint i = 0; i < result.length; i++) {
        Object memory object = objects[head];
        result[i] = object;
        head = object.prev;
        if (head == 0) {
            break;

        }

    }
    return (result, head);


  }

  


}