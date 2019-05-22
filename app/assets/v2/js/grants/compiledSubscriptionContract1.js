let compiledSubscription1 = {
  'contractName': 'Subscription',
  'abi': [
    {
      'constant': true,
      'inputs': [],
      'name': 'requiredGasPrice',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'requiredTokenAmount',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'requiredToAddress',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'requiredPeriodSeconds',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'requiredTokenAddress',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'relayer',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'extraNonce',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'author',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'bytes32'
        }
      ],
      'name': 'nextValidTimestamp',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'name': '_toAddress',
          'type': 'address'
        },
        {
          'name': '_tokenAddress',
          'type': 'address'
        },
        {
          'name': '_tokenAmount',
          'type': 'uint256'
        },
        {
          'name': '_periodSeconds',
          'type': 'uint256'
        },
        {
          'name': '_gasPrice',
          'type': 'uint256'
        },
        {
          'name': '_version',
          'type': 'uint8'
        },
        {
          'name': '_relayer',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'payable': true,
      'stateMutability': 'payable',
      'type': 'fallback'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': 'from',
          'type': 'address'
        },
        {
          'indexed': true,
          'name': 'to',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'tokenAddress',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'tokenAmount',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'periodSeconds',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'gasPrice',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'nonce',
          'type': 'uint256'
        }
      ],
      'name': 'ExecuteSubscription',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': 'from',
          'type': 'address'
        },
        {
          'indexed': true,
          'name': 'to',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'tokenAddress',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'tokenAmount',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'periodSeconds',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'gasPrice',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'nonce',
          'type': 'uint256'
        }
      ],
      'name': 'CancelSubscription',
      'type': 'event'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'subscriptionHash',
          'type': 'bytes32'
        },
        {
          'name': 'gracePeriodSeconds',
          'type': 'uint256'
        }
      ],
      'name': 'isSubscriptionActive',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'from',
          'type': 'address'
        },
        {
          'name': 'to',
          'type': 'address'
        },
        {
          'name': 'tokenAddress',
          'type': 'address'
        },
        {
          'name': 'tokenAmount',
          'type': 'uint256'
        },
        {
          'name': 'periodSeconds',
          'type': 'uint256'
        },
        {
          'name': 'gasPrice',
          'type': 'uint256'
        },
        {
          'name': 'nonce',
          'type': 'uint256'
        }
      ],
      'name': 'getSubscriptionHash',
      'outputs': [
        {
          'name': '',
          'type': 'bytes32'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'subscriptionHash',
          'type': 'bytes32'
        },
        {
          'name': 'signature',
          'type': 'bytes'
        }
      ],
      'name': 'getSubscriptionSigner',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'pure',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'from',
          'type': 'address'
        },
        {
          'name': 'to',
          'type': 'address'
        },
        {
          'name': 'tokenAddress',
          'type': 'address'
        },
        {
          'name': 'tokenAmount',
          'type': 'uint256'
        },
        {
          'name': 'periodSeconds',
          'type': 'uint256'
        },
        {
          'name': 'gasPrice',
          'type': 'uint256'
        },
        {
          'name': 'nonce',
          'type': 'uint256'
        },
        {
          'name': 'signature',
          'type': 'bytes'
        }
      ],
      'name': 'isSubscriptionReady',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'from',
          'type': 'address'
        },
        {
          'name': 'to',
          'type': 'address'
        },
        {
          'name': 'tokenAddress',
          'type': 'address'
        },
        {
          'name': 'tokenAmount',
          'type': 'uint256'
        },
        {
          'name': 'periodSeconds',
          'type': 'uint256'
        },
        {
          'name': 'gasPrice',
          'type': 'uint256'
        },
        {
          'name': 'nonce',
          'type': 'uint256'
        },
        {
          'name': 'signature',
          'type': 'bytes'
        }
      ],
      'name': 'cancelSubscription',
      'outputs': [
        {
          'name': 'success',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'from',
          'type': 'address'
        },
        {
          'name': 'to',
          'type': 'address'
        },
        {
          'name': 'tokenAddress',
          'type': 'address'
        },
        {
          'name': 'tokenAmount',
          'type': 'uint256'
        },
        {
          'name': 'periodSeconds',
          'type': 'uint256'
        },
        {
          'name': 'gasPrice',
          'type': 'uint256'
        },
        {
          'name': 'nonce',
          'type': 'uint256'
        },
        {
          'name': 'signature',
          'type': 'bytes'
        }
      ],
      'name': 'executeSubscription',
      'outputs': [
        {
          'name': 'success',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [],
      'name': 'endContract',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    }
  ],
  'metadata': '{\'compiler\':{\'version\':\'0.5.2+commit.1df8f40c\'},\'language\':\'Solidity\',\'output\':{\'abi\':[{\'constant\':true,\'inputs\':[],\'name\':\'requiredGasPrice\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'subscriptionHash\',\'type\':\'bytes32\'},{\'name\':\'signature\',\'type\':\'bytes\'}],\'name\':\'getSubscriptionSigner\',\'outputs\':[{\'name\':\'\',\'type\':\'address\'}],\'payable\':false,\'stateMutability\':\'pure\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'requiredTokenAmount\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'requiredToAddress\',\'outputs\':[{\'name\':\'\',\'type\':\'address\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'requiredPeriodSeconds\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'requiredTokenAddress\',\'outputs\':[{\'name\':\'\',\'type\':\'address\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[{\'name\':\'from\',\'type\':\'address\'},{\'name\':\'to\',\'type\':\'address\'},{\'name\':\'tokenAddress\',\'type\':\'address\'},{\'name\':\'tokenAmount\',\'type\':\'uint256\'},{\'name\':\'periodSeconds\',\'type\':\'uint256\'},{\'name\':\'gasPrice\',\'type\':\'uint256\'},{\'name\':\'nonce\',\'type\':\'uint256\'},{\'name\':\'signature\',\'type\':\'bytes\'}],\'name\':\'cancelSubscription\',\'outputs\':[{\'name\':\'success\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'relayer\',\'outputs\':[{\'name\':\'\',\'type\':\'address\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'\',\'type\':\'address\'}],\'name\':\'extraNonce\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'author\',\'outputs\':[{\'name\':\'\',\'type\':\'address\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'subscriptionHash\',\'type\':\'bytes32\'},{\'name\':\'gracePeriodSeconds\',\'type\':\'uint256\'}],\'name\':\'isSubscriptionActive\',\'outputs\':[{\'name\':\'\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[],\'name\':\'endContract\',\'outputs\':[],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'from\',\'type\':\'address\'},{\'name\':\'to\',\'type\':\'address\'},{\'name\':\'tokenAddress\',\'type\':\'address\'},{\'name\':\'tokenAmount\',\'type\':\'uint256\'},{\'name\':\'periodSeconds\',\'type\':\'uint256\'},{\'name\':\'gasPrice\',\'type\':\'uint256\'},{\'name\':\'nonce\',\'type\':\'uint256\'}],\'name\':\'getSubscriptionHash\',\'outputs\':[{\'name\':\'\',\'type\':\'bytes32\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[{\'name\':\'from\',\'type\':\'address\'},{\'name\':\'to\',\'type\':\'address\'},{\'name\':\'tokenAddress\',\'type\':\'address\'},{\'name\':\'tokenAmount\',\'type\':\'uint256\'},{\'name\':\'periodSeconds\',\'type\':\'uint256\'},{\'name\':\'gasPrice\',\'type\':\'uint256\'},{\'name\':\'nonce\',\'type\':\'uint256\'},{\'name\':\'signature\',\'type\':\'bytes\'}],\'name\':\'executeSubscription\',\'outputs\':[{\'name\':\'success\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'from\',\'type\':\'address\'},{\'name\':\'to\',\'type\':\'address\'},{\'name\':\'tokenAddress\',\'type\':\'address\'},{\'name\':\'tokenAmount\',\'type\':\'uint256\'},{\'name\':\'periodSeconds\',\'type\':\'uint256\'},{\'name\':\'gasPrice\',\'type\':\'uint256\'},{\'name\':\'nonce\',\'type\':\'uint256\'},{\'name\':\'signature\',\'type\':\'bytes\'}],\'name\':\'isSubscriptionReady\',\'outputs\':[{\'name\':\'\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'\',\'type\':\'bytes32\'}],\'name\':\'nextValidTimestamp\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'inputs\':[{\'name\':\'_toAddress\',\'type\':\'address\'},{\'name\':\'_tokenAddress\',\'type\':\'address\'},{\'name\':\'_tokenAmount\',\'type\':\'uint256\'},{\'name\':\'_periodSeconds\',\'type\':\'uint256\'},{\'name\':\'_gasPrice\',\'type\':\'uint256\'},{\'name\':\'_version\',\'type\':\'uint8\'},{\'name\':\'_relayer\',\'type\':\'address\'}],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'constructor\'},{\'payable\':true,\'stateMutability\':\'payable\',\'type\':\'fallback\'},{\'anonymous\':false,\'inputs\':[{\'indexed\':true,\'name\':\'from\',\'type\':\'address\'},{\'indexed\':true,\'name\':\'to\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'tokenAddress\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'tokenAmount\',\'type\':\'uint256\'},{\'indexed\':false,\'name\':\'periodSeconds\',\'type\':\'uint256\'},{\'indexed\':false,\'name\':\'gasPrice\',\'type\':\'uint256\'},{\'indexed\':false,\'name\':\'nonce\',\'type\':\'uint256\'}],\'name\':\'ExecuteSubscription\',\'type\':\'event\'},{\'anonymous\':false,\'inputs\':[{\'indexed\':true,\'name\':\'from\',\'type\':\'address\'},{\'indexed\':true,\'name\':\'to\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'tokenAddress\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'tokenAmount\',\'type\':\'uint256\'},{\'indexed\':false,\'name\':\'periodSeconds\',\'type\':\'uint256\'},{\'indexed\':false,\'name\':\'gasPrice\',\'type\':\'uint256\'},{\'indexed\':false,\'name\':\'nonce\',\'type\':\'uint256\'}],\'name\':\'CancelSubscription\',\'type\':\'event\'}],\'devdoc\':{\'methods\':{}},\'userdoc\':{\'methods\':{}}},\'settings\':{\'compilationTarget\':{\'/Users/danlipert/gitcoin/grants1337/contracts/Subscription.sol\':\'Subscription\'},\'evmVersion\':\'byzantium\',\'libraries\':{},\'optimizer\':{\'enabled\':false,\'runs\':200},\'remappings\':[]},\'sources\':{\'/Users/danlipert/gitcoin/grants1337/contracts/Subscription.sol\':{\'keccak256\':\'0xd23b843d2a5cbd6e762c03fc55c62e331f306f37458e14cf791f4d10fc8f4c4f\',\'urls\':[\'bzzr://33f93fb60362d588a089d221a20097a97112f7060364f97151667be7e2007bc7\']},\'openzeppelin-solidity/contracts/cryptography/ECDSA.sol\':{\'keccak256\':\'0x0cbeb7f69b70ff62eb5536caebbc8701b6490ae7ee2e252d77891cf6eba11326\',\'urls\':[\'bzzr://58a443499466ee0706d22af81b43ab6779b519255fbc66276546386ec00a30d7\']},\'openzeppelin-solidity/contracts/math/SafeMath.sol\':{\'keccak256\':\'0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\',\'urls\':[\'bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\']},\'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\':{\'keccak256\':\'0x3dceb7e4aa237a56111c13f77d7efadeceda7271d62bfac94ac79afab7c1f411\',\'urls\':[\'bzzr://2f34152a5bec385352002c31bc89f5e9935f628f1923ccea45c2281e0084a4db\']},\'openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\':{\'keccak256\':\'0x59e7df16169a498cb8837963b2f5461d88e63bd1eb6c7d58b814d76b84ccbe61\',\'urls\':[\'bzzr://e572c9c4e02e37349702451bf3b5dcbbc86a19da5a51695b5b3e1bfe1e7825dc\']}},\'version\':1}',
  'bytecode': '0x608060405234801561001057600080fd5b5060405160e080612345833981018060405260e081101561003057600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919050505086600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846004819055508360058190555082600681905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050505061219a806101ab6000396000f3fe608060405260043610610110576000357c010000000000000000000000000000000000000000000000000000000090048063a3d53d18116100a7578063c814786511610076578063c814786514610646578063d3c576cd14610713578063d933c0661461087c578063ff59bff8146109e557610110565b8063a3d53d1814610516578063a6c3e6b91461057b578063ae702ba4146105d2578063bb6e7de91461062f57610110565b80636b40bba1116100e35780636b40bba1146102d45780636f264b2e146102ff57806371d22d4d146103565780638406c079146104bf57610110565b806310d920601461011557806318f321a31461014057806329d428ca14610252578063384c33351461027d575b600080fd5b34801561012157600080fd5b5061012a610a34565b6040518082815260200191505060405180910390f35b34801561014c57600080fd5b506102106004803603604081101561016357600080fd5b81019080803590602001909291908035906020019064010000000081111561018a57600080fd5b82018360208201111561019c57600080fd5b803590602001918460018302840111640100000000831117156101be57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610a3a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561025e57600080fd5b50610267610a5f565b6040518082815260200191505060405180910390f35b34801561028957600080fd5b50610292610a65565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102e057600080fd5b506102e9610a8b565b6040518082815260200191505060405180910390f35b34801561030b57600080fd5b50610314610a91565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561036257600080fd5b506104a5600480360361010081101561037a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019064010000000081111561041f57600080fd5b82018360208201111561043157600080fd5b8035906020019184600183028401116401000000008311171561045357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610ab7565b604051808215151515815260200191505060405180910390f35b3480156104cb57600080fd5b506104d4610cfd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561052257600080fd5b506105656004803603602081101561053957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d23565b6040518082815260200191505060405180910390f35b34801561058757600080fd5b50610590610d3b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105de57600080fd5b50610615600480360360408110156105f557600080fd5b810190808035906020019092919080359060200190929190505050610d60565b604051808215151515815260200191505060405180910390f35b34801561063b57600080fd5b50610644610dd8565b005b34801561065257600080fd5b506106fd600480360360e081101561066957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190505050610e6d565b6040518082815260200191505060405180910390f35b34801561071f57600080fd5b50610862600480360361010081101561073757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190803590602001906401000000008111156107dc57600080fd5b8201836020820111156107ee57600080fd5b8035906020019184600183028401116401000000008311171561081057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061146a565b604051808215151515815260200191505060405180910390f35b34801561088857600080fd5b506109cb60048036036101008110156108a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019064010000000081111561094557600080fd5b82018360208201111561095757600080fd5b8035906020019184600183028401116401000000008311171561097957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611bb0565b604051808215151515815260200191505060405180910390f35b3480156109f157600080fd5b50610a1e60048036036020811015610a0857600080fd5b8101908080359060200190929190505050611e8a565b6040518082815260200191505060405180910390f35b60065481565b6000610a5782610a4985611ea2565b611efa90919063ffffffff16565b905092915050565b60045481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080610ac98a8a8a8a8a8a8a610e6d565b90506000610ad78285610a3a565b90508a73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515610b5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612061602f913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff16141515610c02576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f6d73672e73656e646572206973206e6f7420746865207375627363726962657281525060200191505060405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60076000848152602001908152602001600020819055508973ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff167f51a97a25211c2be9b0b1dd64ee1de490cdb047390e6eba984e6a1d126e6ac4568b8b8b8b8b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a360019250505098975050505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60086020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60076000858152602001908152602001600020541415610da65760009050610dd2565b610dcc82600760008681526020019081526020016000205461200190919063ffffffff16565b42111590505b92915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e3357600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60008073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480610f185750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16145b1515610f8c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f7265717569726564546f41646472657373204661696c7572650000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806110365750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16145b15156110aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f7265717569726564546f6b656e41646472657373204661696c7572650000000081525060200191505060405180910390fd5b600060045414806110bc575060045485145b1515611130576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f7265717569726564546f6b656e416d6f756e74204661696c757265000000000081525060200191505060405180910390fd5b60006005541480611142575060055484145b15156111b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f7265717569726564506572696f645365636f6e6473204661696c75726500000081525060200191505060405180910390fd5b600060065414806111c8575060065483145b151561123c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f72657175697265644761735072696365204661696c757265000000000000000081525060200191505060405180910390fd5b60197f01000000000000000000000000000000000000000000000000000000000000000260007f010000000000000000000000000000000000000000000000000000000000000002308a8a8a8a8a8a604051602001808a7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101897effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018481526020018381526020018281526020019950505050505050505050604051602081830303815290604052805190602001209050979650505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114c857600080fd5b60006114d98a8a8a8a8a8a8a610e6d565b90506114eb8a8a8a8a8a8a8a8a611bb0565b1515611542576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260418152602001806121086041913960600191505060405180910390fd5b611555864261200190919063ffffffff16565b6007600083815260200190815260200160002081905550600860008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548411156115f85783600860008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b60008873ffffffffffffffffffffffffffffffffffffffff166370a082318b6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561169357600080fd5b505afa1580156116a7573d6000803e3d6000fd5b505050506040513d60208110156116bd57600080fd5b810190808051906020019092919050505090508873ffffffffffffffffffffffffffffffffffffffff166323b872dd8c8c8b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156117a757600080fd5b505af11580156117bb573d6000803e3d6000fd5b505050506040513d60208110156117d157600080fd5b8101908080519060200190929190505050508873ffffffffffffffffffffffffffffffffffffffff166370a082318b6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561187c57600080fd5b505afa158015611890573d6000803e3d6000fd5b505050506040513d60208110156118a657600080fd5b8101908080519060200190929190505050888201141515611912576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806121496026913960400191505060405180910390fd5b61191a612022565b1515611971576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806120906035913960400191505060405180910390fd5b8973ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff167f96d296c945eee0618d3cc6f435f4d59f14bcefd708eab22c3de30df20b1347938b8b8b8b8b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a36000861115611b9e578873ffffffffffffffffffffffffffffffffffffffff166323b872dd8c33896040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015611b0257600080fd5b505af1158015611b16573d6000803e3d6000fd5b505050506040513d6020811015611b2c57600080fd5b810190808051906020019092919050505050611b46612022565b1515611b9d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260438152602001806120c56043913960600191505060405180910390fd5b5b60019250505098975050505050505050565b600080611bc28a8a8a8a8a8a8a610e6d565b90506000611bd08285610a3a565b905060008973ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e8d306040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015611ca157600080fd5b505afa158015611cb5573d6000803e3d6000fd5b505050506040513d6020811015611ccb57600080fd5b8101908080519060200190929190505050905060008a73ffffffffffffffffffffffffffffffffffffffff166370a082318e6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611d7957600080fd5b505afa158015611d8d573d6000803e3d6000fd5b505050506040513d6020811015611da357600080fd5b810190808051906020019092919050505090508c73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16148015611e1d57508b73ffffffffffffffffffffffffffffffffffffffff168d73ffffffffffffffffffffffffffffffffffffffff1614155b8015611e3c575060076000858152602001908152602001600020544210155b8015611e5a5750611e56888b61200190919063ffffffff16565b8210155b8015611e785750611e74888b61200190919063ffffffff16565b8110155b94505050505098975050505050505050565b60076020528060005260406000206000915090505481565b60008160405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c01828152602001915050604051602081830303815290604052805190602001209050919050565b600060418251141515611f105760009050611ffb565b60008060006020850151925060408501519150606085015160001a90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a082600190041115611f655760009350505050611ffb565b601b8160ff1614158015611f7d5750601c8160ff1614155b15611f8e5760009350505050611ffb565b60018682858560405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611feb573d6000803e3d6000fd5b5050506020604051035193505050505b92915050565b600080828401905083811015151561201857600080fd5b8091505092915050565b600080600090503d6000811461203f576020811461204857612054565b60019150612054565b60206000803e60005191505b5060008114159150509056fe496e76616c6964205369676e617475726520666f7220737562736372697074696f6e2063616e63656c6c6174696f6e537562736372697074696f6e3a3a65786563757465537562736372697074696f6e205472616e7366657246726f6d206661696c6564537562736372697074696f6e3a3a65786563757465537562736372697074696f6e204661696c656420746f20706179206761732061732066726f6d206163636f756e74537562736372697074696f6e206973206e6f74207265616479206f7220636f6e646974696f6e73206f66207472616e736374696f6e20617265206e6f74206d657445524332302042616c616e636520646964206e6f74206368616e676520636f72726563746c79a165627a7a72305820c2a8cbb755ebd520096559ff42aaaa53fe5eb026b695da6ae213734d1aabdb780029',
  'deployedBytecode': '0x608060405260043610610110576000357c010000000000000000000000000000000000000000000000000000000090048063a3d53d18116100a7578063c814786511610076578063c814786514610646578063d3c576cd14610713578063d933c0661461087c578063ff59bff8146109e557610110565b8063a3d53d1814610516578063a6c3e6b91461057b578063ae702ba4146105d2578063bb6e7de91461062f57610110565b80636b40bba1116100e35780636b40bba1146102d45780636f264b2e146102ff57806371d22d4d146103565780638406c079146104bf57610110565b806310d920601461011557806318f321a31461014057806329d428ca14610252578063384c33351461027d575b600080fd5b34801561012157600080fd5b5061012a610a34565b6040518082815260200191505060405180910390f35b34801561014c57600080fd5b506102106004803603604081101561016357600080fd5b81019080803590602001909291908035906020019064010000000081111561018a57600080fd5b82018360208201111561019c57600080fd5b803590602001918460018302840111640100000000831117156101be57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610a3a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561025e57600080fd5b50610267610a5f565b6040518082815260200191505060405180910390f35b34801561028957600080fd5b50610292610a65565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102e057600080fd5b506102e9610a8b565b6040518082815260200191505060405180910390f35b34801561030b57600080fd5b50610314610a91565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561036257600080fd5b506104a5600480360361010081101561037a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019064010000000081111561041f57600080fd5b82018360208201111561043157600080fd5b8035906020019184600183028401116401000000008311171561045357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610ab7565b604051808215151515815260200191505060405180910390f35b3480156104cb57600080fd5b506104d4610cfd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561052257600080fd5b506105656004803603602081101561053957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d23565b6040518082815260200191505060405180910390f35b34801561058757600080fd5b50610590610d3b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105de57600080fd5b50610615600480360360408110156105f557600080fd5b810190808035906020019092919080359060200190929190505050610d60565b604051808215151515815260200191505060405180910390f35b34801561063b57600080fd5b50610644610dd8565b005b34801561065257600080fd5b506106fd600480360360e081101561066957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190505050610e6d565b6040518082815260200191505060405180910390f35b34801561071f57600080fd5b50610862600480360361010081101561073757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190803590602001906401000000008111156107dc57600080fd5b8201836020820111156107ee57600080fd5b8035906020019184600183028401116401000000008311171561081057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061146a565b604051808215151515815260200191505060405180910390f35b34801561088857600080fd5b506109cb60048036036101008110156108a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019064010000000081111561094557600080fd5b82018360208201111561095757600080fd5b8035906020019184600183028401116401000000008311171561097957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611bb0565b604051808215151515815260200191505060405180910390f35b3480156109f157600080fd5b50610a1e60048036036020811015610a0857600080fd5b8101908080359060200190929190505050611e8a565b6040518082815260200191505060405180910390f35b60065481565b6000610a5782610a4985611ea2565b611efa90919063ffffffff16565b905092915050565b60045481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080610ac98a8a8a8a8a8a8a610e6d565b90506000610ad78285610a3a565b90508a73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515610b5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612061602f913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff16141515610c02576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f6d73672e73656e646572206973206e6f7420746865207375627363726962657281525060200191505060405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60076000848152602001908152602001600020819055508973ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff167f51a97a25211c2be9b0b1dd64ee1de490cdb047390e6eba984e6a1d126e6ac4568b8b8b8b8b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a360019250505098975050505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60086020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60076000858152602001908152602001600020541415610da65760009050610dd2565b610dcc82600760008681526020019081526020016000205461200190919063ffffffff16565b42111590505b92915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e3357600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60008073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480610f185750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16145b1515610f8c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f7265717569726564546f41646472657373204661696c7572650000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806110365750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16145b15156110aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f7265717569726564546f6b656e41646472657373204661696c7572650000000081525060200191505060405180910390fd5b600060045414806110bc575060045485145b1515611130576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f7265717569726564546f6b656e416d6f756e74204661696c757265000000000081525060200191505060405180910390fd5b60006005541480611142575060055484145b15156111b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f7265717569726564506572696f645365636f6e6473204661696c75726500000081525060200191505060405180910390fd5b600060065414806111c8575060065483145b151561123c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f72657175697265644761735072696365204661696c757265000000000000000081525060200191505060405180910390fd5b60197f01000000000000000000000000000000000000000000000000000000000000000260007f010000000000000000000000000000000000000000000000000000000000000002308a8a8a8a8a8a604051602001808a7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101897effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018481526020018381526020018281526020019950505050505050505050604051602081830303815290604052805190602001209050979650505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114c857600080fd5b60006114d98a8a8a8a8a8a8a610e6d565b90506114eb8a8a8a8a8a8a8a8a611bb0565b1515611542576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260418152602001806121086041913960600191505060405180910390fd5b611555864261200190919063ffffffff16565b6007600083815260200190815260200160002081905550600860008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548411156115f85783600860008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b60008873ffffffffffffffffffffffffffffffffffffffff166370a082318b6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561169357600080fd5b505afa1580156116a7573d6000803e3d6000fd5b505050506040513d60208110156116bd57600080fd5b810190808051906020019092919050505090508873ffffffffffffffffffffffffffffffffffffffff166323b872dd8c8c8b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156117a757600080fd5b505af11580156117bb573d6000803e3d6000fd5b505050506040513d60208110156117d157600080fd5b8101908080519060200190929190505050508873ffffffffffffffffffffffffffffffffffffffff166370a082318b6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561187c57600080fd5b505afa158015611890573d6000803e3d6000fd5b505050506040513d60208110156118a657600080fd5b8101908080519060200190929190505050888201141515611912576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806121496026913960400191505060405180910390fd5b61191a612022565b1515611971576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806120906035913960400191505060405180910390fd5b8973ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff167f96d296c945eee0618d3cc6f435f4d59f14bcefd708eab22c3de30df20b1347938b8b8b8b8b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a36000861115611b9e578873ffffffffffffffffffffffffffffffffffffffff166323b872dd8c33896040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015611b0257600080fd5b505af1158015611b16573d6000803e3d6000fd5b505050506040513d6020811015611b2c57600080fd5b810190808051906020019092919050505050611b46612022565b1515611b9d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260438152602001806120c56043913960600191505060405180910390fd5b5b60019250505098975050505050505050565b600080611bc28a8a8a8a8a8a8a610e6d565b90506000611bd08285610a3a565b905060008973ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e8d306040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015611ca157600080fd5b505afa158015611cb5573d6000803e3d6000fd5b505050506040513d6020811015611ccb57600080fd5b8101908080519060200190929190505050905060008a73ffffffffffffffffffffffffffffffffffffffff166370a082318e6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611d7957600080fd5b505afa158015611d8d573d6000803e3d6000fd5b505050506040513d6020811015611da357600080fd5b810190808051906020019092919050505090508c73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16148015611e1d57508b73ffffffffffffffffffffffffffffffffffffffff168d73ffffffffffffffffffffffffffffffffffffffff1614155b8015611e3c575060076000858152602001908152602001600020544210155b8015611e5a5750611e56888b61200190919063ffffffff16565b8210155b8015611e785750611e74888b61200190919063ffffffff16565b8110155b94505050505098975050505050505050565b60076020528060005260406000206000915090505481565b60008160405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c01828152602001915050604051602081830303815290604052805190602001209050919050565b600060418251141515611f105760009050611ffb565b60008060006020850151925060408501519150606085015160001a90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a082600190041115611f655760009350505050611ffb565b601b8160ff1614158015611f7d5750601c8160ff1614155b15611f8e5760009350505050611ffb565b60018682858560405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611feb573d6000803e3d6000fd5b5050506020604051035193505050505b92915050565b600080828401905083811015151561201857600080fd5b8091505092915050565b600080600090503d6000811461203f576020811461204857612054565b60019150612054565b60206000803e60005191505b5060008114159150509056fe496e76616c6964205369676e617475726520666f7220737562736372697074696f6e2063616e63656c6c6174696f6e537562736372697074696f6e3a3a65786563757465537562736372697074696f6e205472616e7366657246726f6d206661696c6564537562736372697074696f6e3a3a65786563757465537562736372697074696f6e204661696c656420746f20706179206761732061732066726f6d206163636f756e74537562736372697074696f6e206973206e6f74207265616479206f7220636f6e646974696f6e73206f66207472616e736374696f6e20617265206e6f74206d657445524332302042616c616e636520646964206e6f74206368616e676520636f72726563746c79a165627a7a72305820c2a8cbb755ebd520096559ff42aaaa53fe5eb026b695da6ae213734d1aabdb780029',
  'sourceMap': '1091:13213:1:-;;;3145:489;8:9:-1;5:2;;;30:1;27;20:12;5:2;3145:489:1;;;;;;;;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;3145:489:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3396:10;3378:17;;:28;;;;;;;;;;;;;;;;;;3437:13;3416:20;;:34;;;;;;;;;;;;;;;;;;3480:12;3460:19;:32;;;;3524:14;3502:21;:36;;;;3565:9;3548:16;:26;;;;3591:10;3584:6;;:17;;;;;;;;;;;;;;;;;;3619:8;3611:7;;:16;;;;;;;;;;;;;;;;;;3145:489;;;;;;;1091:13213;;;;;;',
  'deployedSourceMap': '1091:13213:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14286:9;;;1631:31;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1631:31:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6029:318;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6029:318:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6029:318:1;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;6029:318:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;6029:318:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;6029:318:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;6029:318:1;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1549:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1549:34:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1470:32;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1470:32:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1589:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1589:36:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1508:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1508:35:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;7985:1423;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7985:1423:1;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;7985:1423:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;7985:1423:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7985:1423:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7985:1423:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;7985:1423:1;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1288:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1288:22:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2088:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2088:45:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2088:45:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1212:29;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1212:29:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3874:390;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3874:390:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3874:390:1;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;14057:114;;8:9:-1;5:2;;;30:1;27;20:12;5:2;14057:114:1;;;:::i;:::-;;4420:1548;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4420:1548:1;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;4420:1548:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;9566:3091;;8:9:-1;5:2;;;30:1;27;20:12;5:2;9566:3091:1;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;9566:3091:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;9566:3091:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;9566:3091:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;9566:3091:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;9566:3091:1;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6470:1261;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6470:1261:1;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;6470:1261:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;6470:1261:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;6470:1261:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;6470:1261:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;6470:1261:1;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1854:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1854:53:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1854:53:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1631:31;;;;:::o;6029:318::-;6250:7;6280:60;6330:9;6280:41;:16;:39;:41::i;:::-;:49;;:60;;;;:::i;:::-;6273:67;;6029:318;;;;:::o;1549:34::-;;;;:::o;1470:32::-;;;;;;;;;;;;;:::o;1589:36::-;;;;:::o;1508:35::-;;;;;;;;;;;;;:::o;7985:1423::-;8588:12;8616:24;8643:110;8676:4;8682:2;8686:12;8700:11;8713:13;8728:8;8738:5;8643:19;:110::i;:::-;8616:137;;8763:14;8780:50;8802:16;8820:9;8780:21;:50::i;:::-;8763:67;;8897:4;8887:14;;:6;:14;;;8879:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9020:10;9012:18;;:4;:18;;;9004:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9251:2;9206:18;:36;9225:16;9206:36;;;;;;;;;;;:48;;;;9308:2;9270:109;;9302:4;9270:109;;;9312:12;9326:11;9339:13;9354:8;9364:5;9270:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9397:4;9390:11;;;;7985:1423;;;;;;;;;;:::o;1288:22::-;;;;;;;;;;;;;:::o;2088:45::-;;;;;;;;;;;;;;;;;:::o;1212:29::-;;;;;;;;;;;;;:::o;3874:390::-;4027:4;4096:2;4050:18;:36;4069:16;4050:36;;;;;;;;;;;;:49;4047:88;;;4119:5;4112:12;;;;4047:88;4187:60;4228:18;4187;:36;4206:16;4187:36;;;;;;;;;;;;:40;;:60;;;;:::i;:::-;4152:15;:95;;4144:113;;3874:390;;;;;:::o;14057:114::-;14129:6;;;;;;;;;;;14117:18;;:10;:18;;;14109:27;;;;;;;;14157:6;;;;;;;;;;;14144:20;;;4420:1548;4956:7;5122:1;5093:31;;:17;;;;;;;;;;;:31;;;:58;;;;5134:17;;;;;;;;;;;5128:23;;:2;:23;;;5093:58;5084:98;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5233:1;5201:34;;:20;;;;;;;;;;;:34;;;:74;;;;5255:20;;;;;;;;;;;5239:36;;:12;:36;;;5201:74;5192:118;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5352:1;5329:19;;:24;:62;;;;5372:19;;5357:11;:34;5329:62;5320:105;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5469:1;5444:21;;:26;:68;;;;5491:21;;5474:13;:38;5444:68;5435:113;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5587:1;5567:16;;:21;:53;;;;5604:16;;5592:8;:28;5567:53;5558:93;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5731:4;5726:10;;5759:1;5754:7;;5787:4;5810;5832:2;5852:12;5882:11;5911:13;5942:8;5692:268;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5692:268:1;;;5669:292;;;;;;5662:299;;4420:1548;;;;;;;;;:::o;9566:3091::-;10171:12;10221:7;;;;;;;;;;;10207:21;;:10;:21;;;10199:30;;;;;;;;10239:24;10266:110;10299:4;10305:2;10309:12;10323:11;10336:13;10351:8;10361:5;10266:19;:110::i;:::-;10239:137;;10453:99;10473:4;10479:2;10483:12;10497:11;10510:13;10525:8;10535:5;10542:9;10453:19;:99::i;:::-;10444:179;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10752:34;10772:13;10752:15;:19;;:34;;;;:::i;:::-;10713:18;:36;10732:16;10713:36;;;;;;;;;;;:73;;;;10913:10;:16;10924:4;10913:16;;;;;;;;;;;;;;;;10905:5;:24;10902:75;;;10961:5;10942:10;:16;10953:4;10942:16;;;;;;;;;;;;;;;:24;;;;10902:75;11062:23;11094:12;11088:29;;;11118:2;11088:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11088:33:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11088:33:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11088:33:1;;;;;;;;;;;;;;;;11062:59;;11137:12;11131:32;;;11164:4;11169:2;11172:11;11131:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11131:53:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11131:53:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11131:53:1;;;;;;;;;;;;;;;;;11252:12;11246:29;;;11276:2;11246:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11246:33:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11246:33:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11246:33:1;;;;;;;;;;;;;;;;11230:11;11214:15;:27;11213:66;11194:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11371:14;:12;:14::i;:::-;11352:112;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11520:2;11481:110;;11514:4;11481:110;;;11524:12;11538:11;11551:13;11566:8;11576:5;11481:110;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11822:1;11811:8;:12;11807:822;;;12410:12;12404:32;;;12437:4;12443:10;12455:8;12404:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;12404:60:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;12404:60:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;12404:60:1;;;;;;;;;;;;;;;;;12503:14;:12;:14::i;:::-;12478:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11807:822;12646:4;12639:11;;;;9566:3091;;;;;;;;;;:::o;6470:1261::-;7088:4;7108:24;7135:110;7168:4;7174:2;7178:12;7192:11;7205:13;7220:8;7230:5;7135:19;:110::i;:::-;7108:137;;7255:14;7272:50;7294:16;7312:9;7272:21;:50::i;:::-;7255:67;;7332:17;7358:12;7352:29;;;7382:4;7396;7352:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7352:50:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;7352:50:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7352:50:1;;;;;;;;;;;;;;;;7332:70;;7412:15;7436:12;7430:29;;;7460:4;7430:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7430:35:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;7430:35:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7430:35:1;;;;;;;;;;;;;;;;7412:53;;7507:4;7497:14;;:6;:14;;;:40;;;;;7535:2;7527:10;;:4;:10;;;;7497:40;:111;;;;;7572:18;:36;7591:16;7572:36;;;;;;;;;;;;7553:15;:55;;7497:111;:165;;;;;7637:25;7653:8;7637:11;:15;;:25;;;;:::i;:::-;7624:9;:38;;7497:165;:217;;;;;7689:25;7705:8;7689:11;:15;;:25;;;;:::i;:::-;7678:7;:36;;7497:217;7476:248;;;;;;6470:1261;;;;;;;;;;:::o;1854:53::-;;;;;;;;;;;;;;;;;:::o;2650:265:2:-;2719:7;2902:4;2849:58;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2849:58:2;;;2839:69;;;;;;2832:76;;2650:265;;;:::o;609:1891::-;687:7;768:2;748:9;:16;:22;;744:72;;;802:1;786:19;;;;744:72;882:9;901;920:7;1166:4;1155:9;1151:20;1145:27;1140:32;;1211:4;1200:9;1196:20;1190:27;1185:32;;1264:4;1253:9;1249:20;1243:27;1240:1;1235:36;1230:41;;2182:66;2177:1;2169:10;;;:79;2165:127;;;2279:1;2264:17;;;;;;;2165:127;2311:2;2306:1;:7;;;;:18;;;;;2322:2;2317:1;:7;;;;2306:18;2302:66;;;2355:1;2340:17;;;;;;;2302:66;2469:24;2479:4;2485:1;2488;2491;2469:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2469:24:2;;;;;;;;2462:31;;;;;609:1891;;;;;:::o;1439:145:3:-;1497:7;1516:9;1532:1;1528;:5;1516:17;;1556:1;1551;:6;;1543:15;;;;;;;;1576:1;1569:8;;;1439:145;;;;:::o;13072:855:1:-;13147:4;13167:19;13189:1;13167:23;;13368:14;13450:3;13445:57;;;;13573:4;13568:220;;;;13361:516;;13445:57;13487:1;13472:16;;13445:57;;13568:220;13673:4;13668:3;13663;13648:30;13770:3;13764:10;13749:25;;13361:516;;13919:1;13904:11;:16;;13897:23;;;13072:855;:::o',
  'source': 'pragma solidity ^0.5.2;\n\n/*\n  Super Simple Token Subscriptions - https://tokensubscription.com\n  //// Breakin’ Through @ University of Wyoming ////\n  Austin Thomas Griffith - https://austingriffith.com\n  Building on previous works:\n    https://github.com/austintgriffith/token-subscription\n    https://gist.github.com/androolloyd/0a62ef48887be00a5eff5c17f2be849a\n    https://media.consensys.net/subscription-services-on-the-blockchain-erc-948-6ef64b083a36\n    https://medium.com/gitcoin/technical-deep-dive-architecture-choices-for-subscriptions-on-the-blockchain-erc948-5fae89cabc7a\n    https://github.com/ethereum/EIPs/pull/1337\n    https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1077.md\n    https://github.com/gnosis/safe-contracts\n  Earlier Meta Transaction Demo:\n    https://github.com/austintgriffith/bouncer-proxy\n  Huge thanks, as always, to OpenZeppelin for the rad contracts:\n */\n\nimport \\"openzeppelin-solidity/contracts/cryptography/ECDSA.sol\\";\nimport \\"openzeppelin-solidity/contracts/math/SafeMath.sol\\";\nimport \\"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\\";\n\n\ncontract Subscription {\n    using ECDSA for bytes32;\n    using SafeMath for uint256;\n\n    //who deploys the contract\n    address payable public author;\n\n    //restrict who can relay the metatx\n    address public relayer;\n\n    // the publisher may optionally deploy requirements for the subscription\n    // so only meta transactions that match the requirements can be relayed\n    address public requiredToAddress;\n    address public requiredTokenAddress;\n    uint256 public requiredTokenAmount;\n    uint256 public requiredPeriodSeconds;\n    uint256 public requiredGasPrice;\n\n\n    // similar to a nonce that avoids replay attacks this allows a single execution\n    // every x seconds for a given subscription\n    // subscriptionHash  => next valid block number\n    mapping(bytes32 => uint256) public nextValidTimestamp;\n\n    //well use a nonce for each from but because transactions can go through\n    //multiple times, we allow anything but users can use this as a signal for\n    //uniqueness\n    mapping(address => uint256) public extraNonce;\n\n    event ExecuteSubscription(\n        address indexed from, //the subscriber\n        address indexed to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        uint256 gasPrice, //the amount of tokens to pay relayer (0 for free)\n        uint256 nonce // to allow multiple subscriptions with the same parameters\n    );\n\n    event CancelSubscription(\n        address indexed from, //the subscriber\n        address indexed to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        uint256 gasPrice, //the amount of tokens to pay relayer (0 for free)\n        uint256 nonce // to allow multiple subscriptions with the same parameters\n    );\n\n    constructor(\n        address _toAddress,\n        address _tokenAddress,\n        uint256 _tokenAmount,\n        uint256 _periodSeconds,\n        uint256 _gasPrice,\n        uint8 _version,\n        address _relayer\n    ) public {\n        requiredToAddress=_toAddress;\n        requiredTokenAddress=_tokenAddress;\n        requiredTokenAmount=_tokenAmount;\n        requiredPeriodSeconds=_periodSeconds;\n        requiredGasPrice=_gasPrice;\n        author=msg.sender;\n        relayer=_relayer;\n    }\n\n    // this is used by external smart contracts to verify on-chain that a\n    // particular subscription is \\"paid\\" and \\"active\\"\n    // there must be a small grace period added to allow the publisher\n    // or desktop miner to execute\n    function isSubscriptionActive(\n        bytes32 subscriptionHash,\n        uint256 gracePeriodSeconds\n    )\n        external\n        view\n        returns (bool)\n    {\n        if(nextValidTimestamp[subscriptionHash]==uint256(-1)){\n          return false;\n        }\n        return (block.timestamp <=\n                nextValidTimestamp[subscriptionHash].add(gracePeriodSeconds)\n        );\n    }\n\n    // given the subscription details, generate a hash and try to kind of follow\n    // the eip-191 standard and eip-1077 standard from my dude @avsa\n    function getSubscriptionHash(\n        address from, //the subscriber\n        address to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        uint256 gasPrice, //the amount of tokens or eth to pay relayer (0 for free)\n        uint256 nonce // to allow multiple subscriptions with the same parameters\n    )\n        public\n        view\n        returns (bytes32)\n    {\n        // if there are requirements from the deployer, let\"s make sure\n        // those are met exactly\n        require( requiredToAddress == address(0) || to == requiredToAddress, \\"requiredToAddress Failure\\" );\n        require( requiredTokenAddress == address(0) || tokenAddress == requiredTokenAddress, \\"requiredTokenAddress Failure\\"  );\n        require( requiredTokenAmount == 0 || tokenAmount == requiredTokenAmount, \\"requiredTokenAmount Failure\\"  );\n        require( requiredPeriodSeconds == 0 || periodSeconds == requiredPeriodSeconds, \\"requiredPeriodSeconds Failure\\"  );\n        require( requiredGasPrice == 0 || gasPrice == requiredGasPrice, \\"requiredGasPrice Failure\\"  );\n\n        return keccak256(\n            abi.encodePacked(\n                byte(0x19),\n                byte(0),\n                address(this),\n                from,\n                to,\n                tokenAddress,\n                tokenAmount,\n                periodSeconds,\n                gasPrice\n        ));\n    }\n\n    //ecrecover the signer from hash and the signature\n    function getSubscriptionSigner(\n        bytes32 subscriptionHash, //hash of subscription\n        bytes memory signature //proof the subscriber signed the meta trasaction\n    )\n        public\n        pure\n        returns (address)\n    {\n        return subscriptionHash.toEthSignedMessageHash().recover(signature);\n    }\n\n    //check if a subscription is signed correctly and the timestamp is ready for\n    // the next execution to happen\n    function isSubscriptionReady(\n        address from, //the subscriber\n        address to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        uint256 gasPrice, //the amount of the token to incentivize the relay network\n        uint256 nonce,// to allow multiple subscriptions with the same parameters\n        bytes memory signature //proof the subscriber signed the meta trasaction\n    )\n        public\n        view\n        returns (bool)\n    {\n        bytes32 subscriptionHash = getSubscriptionHash(\n            from, to, tokenAddress, tokenAmount, periodSeconds, gasPrice, nonce\n        );\n        address signer = getSubscriptionSigner(subscriptionHash, signature);\n        uint256 allowance = ERC20(tokenAddress).allowance(from, address(this));\n        uint256 balance = ERC20(tokenAddress).balanceOf(from);\n\n        return (\n            signer == from &&\n            from != to &&\n            block.timestamp >= nextValidTimestamp[subscriptionHash] &&\n            allowance >= tokenAmount.add(gasPrice) &&\n            balance >= tokenAmount.add(gasPrice)\n        );\n    }\n\n    // you don\"t really need this if you are using the approve/transferFrom method\n    // because you control the flow of tokens by approving this contract address,\n    // but to make the contract an extensible example for later user I\"ll add this\n    function cancelSubscription(\n        address from, //the subscriber\n        address to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        uint256 gasPrice, //the amount of tokens or eth to pay relayer (0 for free)\n        uint256 nonce, //to allow multiple subscriptions with the same parameters\n        bytes memory signature //proof the subscriber signed the meta trasaction\n    )\n        public\n        returns (bool success)\n    {\n        bytes32 subscriptionHash = getSubscriptionHash(\n            from, to, tokenAddress, tokenAmount, periodSeconds, gasPrice, nonce\n        );\n        address signer = getSubscriptionSigner(subscriptionHash, signature);\n\n        //the signature must be valid\n        require(signer == from, \\"Invalid Signature for subscription cancellation\\");\n\n        //make sure it\"s the subscriber\n        require(from == msg.sender, \"msg.sender is not the subscriber\");\n\n        //nextValidTimestamp should be a timestamp that will never\n        //be reached during the brief window human existence\n        nextValidTimestamp[subscriptionHash]=uint256(-1);\n\n        emit CancelSubscription(\n            from, to, tokenAddress, tokenAmount, periodSeconds, gasPrice, nonce\n        );\n\n        return true;\n    }\n\n    // execute the transferFrom to pay the publisher from the subscriber\n    // the subscriber has full control by approving this contract an allowance\n    function executeSubscription(\n        address from, //the subscriber\n        address to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        uint256 gasPrice, //the amount of tokens or eth to pay relayer (0 for free)\n        uint256 nonce, // to allow multiple subscriptions with the same parameters\n        bytes memory signature //proof the subscriber signed the meta trasaction\n    )\n        public\n        returns (bool success)\n    {\n        require(msg.sender == relayer);\n        bytes32 subscriptionHash = getSubscriptionHash(\n            from, to, tokenAddress, tokenAmount, periodSeconds, gasPrice, nonce\n        );\n\n        // make sure the subscription is valid and ready\n        require( isSubscriptionReady(from, to, tokenAddress, tokenAmount, periodSeconds, gasPrice, nonce, signature), \\"Subscription is not ready or conditions of transction are not met\\" );\n\n        //increment the timestamp by the period so it wont be valid until then\n        nextValidTimestamp[subscriptionHash] = block.timestamp.add(periodSeconds);\n\n        //check to see if this nonce is larger than the current count and we\"ll set that for this \"from\"\n        if(nonce > extraNonce[from]){\n          extraNonce[from] = nonce;\n        }\n\n        // now, let make the transfer from the subscriber to the publisher\n        uint256 startingBalance = ERC20(tokenAddress).balanceOf(to);\n        ERC20(tokenAddress).transferFrom(from,to,tokenAmount);\n        require(\n          (startingBalance+tokenAmount) == ERC20(tokenAddress).balanceOf(to),\n          \\"ERC20 Balance did not change correctly\\"\n        );\n\n        require(\n          checkSuccess(),\n          \\"Subscription::executeSubscription TransferFrom failed\\"\n          );\n\n\n        emit ExecuteSubscription(\n            from, to, tokenAddress, tokenAmount, periodSeconds, gasPrice, nonce\n        );\n\n        // it is possible for the subscription execution to be run by a third party\n        // incentivized in the terms of the subscription with a gasPrice of the tokens\n        //  - pay that out now...\n        if (gasPrice > 0) {\n            //the relayer is incentivized by a little of the same token from\n            // the subscriber ... as far as the subscriber knows, they are\n            // just sending X tokens to the publisher, but the publisher can\n            // choose to send Y of those X to a relayer to run their transactions\n            // the publisher will receive X - Y tokens\n            // this must all be setup in the constructor\n            // if not, the subscriber chooses all the params including what goes\n            // to the publisher and what goes to the relayer\n            ERC20(tokenAddress).transferFrom(from, msg.sender, gasPrice);\n            require(\n                checkSuccess(),\n                \\"Subscription::executeSubscription Failed to pay gas as from account\\"\n            );\n        }\n\n        return true;\n    }\n\n    // because of issues with non-standard erc20s the transferFrom can always return false\n    // to fix this we run it and then check the return of the previous function:\n    //    https://github.com/ethereum/solidity/issues/4116\n    /**\n     * Checks the return value of the previous function. Returns true if the previous function\n     * function returned 32 non-zero bytes or returned zero bytes.\n     */\n    function checkSuccess(\n    )\n        private\n        pure\n        returns (bool)\n    {\n        uint256 returnValue = 0;\n\n        /* solium-disable-next-line security/no-inline-assembly */\n        assembly {\n            // check number of bytes returned from last function call\n            switch returndatasize\n\n            // no bytes returned: assume success\n            case 0x0 {\n                returnValue := 1\n            }\n\n            // 32 bytes returned: check if non-zero\n            case 0x20 {\n                // copy 32 bytes into scratch space\n                returndatacopy(0x0, 0x0, 0x20)\n\n                // load those bytes into returnValue\n                returnValue := mload(0x0)\n            }\n\n            // not sure what was returned: dont mark as success\n            default { }\n        }\n\n        return returnValue != 0;\n    }\n\n    //we would like a way for the author to completly destroy the subscription\n    // contract to prevent further transfers\n    function endContract()\n        external\n    {\n      require(msg.sender==author);\n      selfdestruct(author);\n    }\n\n    // let\"s go ahead and revert any ETH sent directly to the contract\n    function () external payable {\n       revert ();\n    }\n}\n',
  'sourcePath': '/Users/danlipert/gitcoin/grants1337/contracts/Subscription.sol',
  'ast': {
    'absolutePath': '/Users/danlipert/gitcoin/grants1337/contracts/Subscription.sol',
    'exportedSymbols': {
      'Subscription': [
        675
      ]
    },
    'id': 676,
    'nodeType': 'SourceUnit',
    'nodes': [
      {
        'id': 58,
        'literals': [
          'solidity',
          '^',
          '0.5',
          '.2'
        ],
        'nodeType': 'PragmaDirective',
        'src': '0:23:1'
      },
      {
        'absolutePath': 'openzeppelin-solidity/contracts/cryptography/ECDSA.sol',
        'file': 'openzeppelin-solidity/contracts/cryptography/ECDSA.sol',
        'id': 59,
        'nodeType': 'ImportDirective',
        'scope': 676,
        'sourceUnit': 757,
        'src': '900:64:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': 'openzeppelin-solidity/contracts/math/SafeMath.sol',
        'file': 'openzeppelin-solidity/contracts/math/SafeMath.sol',
        'id': 60,
        'nodeType': 'ImportDirective',
        'scope': 676,
        'sourceUnit': 885,
        'src': '965:59:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol',
        'file': 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol',
        'id': 61,
        'nodeType': 'ImportDirective',
        'scope': 676,
        'sourceUnit': 1268,
        'src': '1025:63:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'baseContracts': [],
        'contractDependencies': [],
        'contractKind': 'contract',
        'documentation': null,
        'fullyImplemented': true,
        'id': 675,
        'linearizedBaseContracts': [
          675
        ],
        'name': 'Subscription',
        'nodeType': 'ContractDefinition',
        'nodes': [
          {
            'id': 64,
            'libraryName': {
              'contractScope': null,
              'id': 62,
              'name': 'ECDSA',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 756,
              'src': '1125:5:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_ECDSA_$756',
                'typeString': 'library ECDSA'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '1119:24:1',
            'typeName': {
              'id': 63,
              'name': 'bytes32',
              'nodeType': 'ElementaryTypeName',
              'src': '1135:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_bytes32',
                'typeString': 'bytes32'
              }
            }
          },
          {
            'id': 67,
            'libraryName': {
              'contractScope': null,
              'id': 65,
              'name': 'SafeMath',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 884,
              'src': '1154:8:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_SafeMath_$884',
                'typeString': 'library SafeMath'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '1148:27:1',
            'typeName': {
              'id': 66,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1167:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            }
          },
          {
            'constant': false,
            'id': 69,
            'name': 'author',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1212:29:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address_payable',
              'typeString': 'address payable'
            },
            'typeName': {
              'id': 68,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1212:15:1',
              'stateMutability': 'payable',
              'typeDescriptions': {
                'typeIdentifier': 't_address_payable',
                'typeString': 'address payable'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 71,
            'name': 'relayer',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1288:22:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address',
              'typeString': 'address'
            },
            'typeName': {
              'id': 70,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1288:7:1',
              'stateMutability': 'nonpayable',
              'typeDescriptions': {
                'typeIdentifier': 't_address',
                'typeString': 'address'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 73,
            'name': 'requiredToAddress',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1470:32:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address',
              'typeString': 'address'
            },
            'typeName': {
              'id': 72,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1470:7:1',
              'stateMutability': 'nonpayable',
              'typeDescriptions': {
                'typeIdentifier': 't_address',
                'typeString': 'address'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 75,
            'name': 'requiredTokenAddress',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1508:35:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address',
              'typeString': 'address'
            },
            'typeName': {
              'id': 74,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1508:7:1',
              'stateMutability': 'nonpayable',
              'typeDescriptions': {
                'typeIdentifier': 't_address',
                'typeString': 'address'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 77,
            'name': 'requiredTokenAmount',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1549:34:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 76,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1549:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 79,
            'name': 'requiredPeriodSeconds',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1589:36:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 78,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1589:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 81,
            'name': 'requiredGasPrice',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1631:31:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 80,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1631:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 85,
            'name': 'nextValidTimestamp',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1854:53:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
              'typeString': 'mapping(bytes32 => uint256)'
            },
            'typeName': {
              'id': 84,
              'keyType': {
                'id': 82,
                'name': 'bytes32',
                'nodeType': 'ElementaryTypeName',
                'src': '1862:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_bytes32',
                  'typeString': 'bytes32'
                }
              },
              'nodeType': 'Mapping',
              'src': '1854:27:1',
              'typeDescriptions': {
                'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                'typeString': 'mapping(bytes32 => uint256)'
              },
              'valueType': {
                'id': 83,
                'name': 'uint256',
                'nodeType': 'ElementaryTypeName',
                'src': '1873:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                }
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 89,
            'name': 'extraNonce',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '2088:45:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
              'typeString': 'mapping(address => uint256)'
            },
            'typeName': {
              'id': 88,
              'keyType': {
                'id': 86,
                'name': 'address',
                'nodeType': 'ElementaryTypeName',
                'src': '2096:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_address',
                  'typeString': 'address'
                }
              },
              'nodeType': 'Mapping',
              'src': '2088:27:1',
              'typeDescriptions': {
                'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                'typeString': 'mapping(address => uint256)'
              },
              'valueType': {
                'id': 87,
                'name': 'uint256',
                'nodeType': 'ElementaryTypeName',
                'src': '2107:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                }
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 105,
            'name': 'ExecuteSubscription',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 104,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 91,
                  'indexed': true,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2175:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 90,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2175:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 93,
                  'indexed': true,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2222:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 92,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2222:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 95,
                  'indexed': false,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2266:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 94,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2266:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 97,
                  'indexed': false,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2338:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 96,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2338:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 99,
                  'indexed': false,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2408:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 98,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2408:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 101,
                  'indexed': false,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2480:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 100,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2480:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 103,
                  'indexed': false,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2557:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 102,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2557:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2165:471:1'
            },
            'src': '2140:497:1'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 121,
            'name': 'CancelSubscription',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 120,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 107,
                  'indexed': true,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '2677:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 106,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2677:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 109,
                  'indexed': true,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '2724:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 108,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2724:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 111,
                  'indexed': false,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '2768:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 110,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2768:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 113,
                  'indexed': false,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '2840:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 112,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2840:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 115,
                  'indexed': false,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '2910:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 114,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2910:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 117,
                  'indexed': false,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '2982:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 116,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2982:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 119,
                  'indexed': false,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '3059:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 118,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3059:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2667:471:1'
            },
            'src': '2643:496:1'
          },
          {
            'body': {
              'id': 167,
              'nodeType': 'Block',
              'src': '3368:266:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 140,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 138,
                      'name': 'requiredToAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 73,
                      'src': '3378:17:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 139,
                      'name': '_toAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 123,
                      'src': '3396:10:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'src': '3378:28:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'id': 141,
                  'nodeType': 'ExpressionStatement',
                  'src': '3378:28:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 144,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 142,
                      'name': 'requiredTokenAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 75,
                      'src': '3416:20:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 143,
                      'name': '_tokenAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 125,
                      'src': '3437:13:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'src': '3416:34:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'id': 145,
                  'nodeType': 'ExpressionStatement',
                  'src': '3416:34:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 148,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 146,
                      'name': 'requiredTokenAmount',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 77,
                      'src': '3460:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 147,
                      'name': '_tokenAmount',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 127,
                      'src': '3480:12:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3460:32:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 149,
                  'nodeType': 'ExpressionStatement',
                  'src': '3460:32:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 152,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 150,
                      'name': 'requiredPeriodSeconds',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 79,
                      'src': '3502:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 151,
                      'name': '_periodSeconds',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 129,
                      'src': '3524:14:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3502:36:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 153,
                  'nodeType': 'ExpressionStatement',
                  'src': '3502:36:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 156,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 154,
                      'name': 'requiredGasPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 81,
                      'src': '3548:16:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 155,
                      'name': '_gasPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 131,
                      'src': '3565:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3548:26:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 157,
                  'nodeType': 'ExpressionStatement',
                  'src': '3548:26:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 161,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 158,
                      'name': 'author',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 69,
                      'src': '3584:6:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address_payable',
                        'typeString': 'address payable'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'id': 159,
                        'name': 'msg',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 1351,
                        'src': '3591:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_magic_message',
                          'typeString': 'msg'
                        }
                      },
                      'id': 160,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'sender',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': null,
                      'src': '3591:10:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address_payable',
                        'typeString': 'address payable'
                      }
                    },
                    'src': '3584:17:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address_payable',
                      'typeString': 'address payable'
                    }
                  },
                  'id': 162,
                  'nodeType': 'ExpressionStatement',
                  'src': '3584:17:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 165,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 163,
                      'name': 'relayer',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 71,
                      'src': '3611:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 164,
                      'name': '_relayer',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 135,
                      'src': '3619:8:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'src': '3611:16:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'id': 166,
                  'nodeType': 'ExpressionStatement',
                  'src': '3611:16:1'
                }
              ]
            },
            'documentation': null,
            'id': 168,
            'implemented': true,
            'kind': 'constructor',
            'modifiers': [],
            'name': '',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 136,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 123,
                  'name': '_toAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3166:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 122,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3166:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 125,
                  'name': '_tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3194:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 124,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3194:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 127,
                  'name': '_tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3225:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 126,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3225:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 129,
                  'name': '_periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3255:22:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 128,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3255:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 131,
                  'name': '_gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3287:17:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 130,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3287:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 133,
                  'name': '_version',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3314:14:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint8',
                    'typeString': 'uint8'
                  },
                  'typeName': {
                    'id': 132,
                    'name': 'uint8',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3314:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint8',
                      'typeString': 'uint8'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 135,
                  'name': '_relayer',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3338:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 134,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3338:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3156:204:1'
            },
            'returnParameters': {
              'id': 137,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '3368:0:1'
            },
            'scope': 675,
            'src': '3145:489:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 200,
              'nodeType': 'Block',
              'src': '4037:227:1',
              'statements': [
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 184,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 177,
                        'name': 'nextValidTimestamp',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 85,
                        'src': '4050:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                          'typeString': 'mapping(bytes32 => uint256)'
                        }
                      },
                      'id': 179,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 178,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 170,
                        'src': '4069:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'nodeType': 'IndexAccess',
                      'src': '4050:36:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '==',
                    'rightExpression': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 182,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'nodeType': 'UnaryOperation',
                          'operator': '-',
                          'prefix': true,
                          'src': '4096:2:1',
                          'subExpression': {
                            'argumentTypes': null,
                            'hexValue': '31',
                            'id': 181,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '4097:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_1_by_1',
                              'typeString': 'int_const 1'
                            },
                            'value': '1'
                          },
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        ],
                        'id': 180,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'lValueRequested': false,
                        'nodeType': 'ElementaryTypeNameExpression',
                        'src': '4088:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_type$_t_uint256_$',
                          'typeString': 'type(uint256)'
                        },
                        'typeName': 'uint256'
                      },
                      'id': 183,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'typeConversion',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '4088:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '4050:49:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 188,
                  'nodeType': 'IfStatement',
                  'src': '4047:88:1',
                  'trueBody': {
                    'id': 187,
                    'nodeType': 'Block',
                    'src': '4100:35:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'hexValue': '66616c7365',
                          'id': 185,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'bool',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '4119:5:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'value': 'false'
                        },
                        'functionReturnParameters': 176,
                        'id': 186,
                        'nodeType': 'Return',
                        'src': '4112:12:1'
                      }
                    ]
                  }
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'components': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 197,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 189,
                            'name': 'block',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1341,
                            'src': '4152:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_block',
                              'typeString': 'block'
                            }
                          },
                          'id': 190,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'timestamp',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '4152:15:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '<=',
                        'rightExpression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 195,
                              'name': 'gracePeriodSeconds',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 172,
                              'src': '4228:18:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            ],
                            'expression': {
                              'argumentTypes': null,
                              'baseExpression': {
                                'argumentTypes': null,
                                'id': 191,
                                'name': 'nextValidTimestamp',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 85,
                                'src': '4187:18:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                                  'typeString': 'mapping(bytes32 => uint256)'
                                }
                              },
                              'id': 193,
                              'indexExpression': {
                                'argumentTypes': null,
                                'id': 192,
                                'name': 'subscriptionHash',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 170,
                                'src': '4206:16:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_bytes32',
                                  'typeString': 'bytes32'
                                }
                              },
                              'isConstant': false,
                              'isLValue': true,
                              'isPure': false,
                              'lValueRequested': false,
                              'nodeType': 'IndexAccess',
                              'src': '4187:36:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            },
                            'id': 194,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'memberName': 'add',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 863,
                            'src': '4187:40:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                              'typeString': 'function (uint256,uint256) pure returns (uint256)'
                            }
                          },
                          'id': 196,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '4187:60:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'src': '4152:95:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'id': 198,
                    'isConstant': false,
                    'isInlineArray': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'nodeType': 'TupleExpression',
                    'src': '4151:106:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 176,
                  'id': 199,
                  'nodeType': 'Return',
                  'src': '4144:113:1'
                }
              ]
            },
            'documentation': null,
            'id': 201,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'isSubscriptionActive',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 173,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 170,
                  'name': 'subscriptionHash',
                  'nodeType': 'VariableDeclaration',
                  'scope': 201,
                  'src': '3913:24:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes32',
                    'typeString': 'bytes32'
                  },
                  'typeName': {
                    'id': 169,
                    'name': 'bytes32',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3913:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 172,
                  'name': 'gracePeriodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 201,
                  'src': '3947:26:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 171,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3947:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3903:76:1'
            },
            'returnParameters': {
              'id': 176,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 175,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 201,
                  'src': '4027:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 174,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4027:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4026:6:1'
            },
            'scope': 675,
            'src': '3874:390:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'external'
          },
          {
            'body': {
              'id': 300,
              'nodeType': 'Block',
              'src': '4969:999:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 229,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 225,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 221,
                            'name': 'requiredToAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 73,
                            'src': '5093:17:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30',
                                'id': 223,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '5122:1:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                },
                                'value': '0'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                }
                              ],
                              'id': 222,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5114:7:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_address_$',
                                'typeString': 'type(address)'
                              },
                              'typeName': 'address'
                            },
                            'id': 224,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5114:10:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            }
                          },
                          'src': '5093:31:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 228,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 226,
                            'name': 'to',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 205,
                            'src': '5128:2:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 227,
                            'name': 'requiredToAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 73,
                            'src': '5134:17:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'src': '5128:23:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5093:58:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564546f41646472657373204661696c757265',
                        'id': 230,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5153:27:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_1780bcf794aab203f72828cdd8822e2720f64bbe143d842ce30f054eabc78430',
                          'typeString': 'literal_string \'requiredToAddress Failure\''
                        },
                        'value': 'requiredToAddress Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_1780bcf794aab203f72828cdd8822e2720f64bbe143d842ce30f054eabc78430',
                          'typeString': 'literal_string \'requiredToAddress Failure\''
                        }
                      ],
                      'id': 220,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '5084:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 231,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5084:98:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 232,
                  'nodeType': 'ExpressionStatement',
                  'src': '5084:98:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 242,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 238,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 234,
                            'name': 'requiredTokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 75,
                            'src': '5201:20:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30',
                                'id': 236,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '5233:1:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                },
                                'value': '0'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                }
                              ],
                              'id': 235,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5225:7:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_address_$',
                                'typeString': 'type(address)'
                              },
                              'typeName': 'address'
                            },
                            'id': 237,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5225:10:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            }
                          },
                          'src': '5201:34:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 241,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 239,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 207,
                            'src': '5239:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 240,
                            'name': 'requiredTokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 75,
                            'src': '5255:20:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'src': '5239:36:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5201:74:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564546f6b656e41646472657373204661696c757265',
                        'id': 243,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5277:30:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0a4155ffffdaca064dc0492130d948bbabedf9b4a3c7b4dba7701d2aa083061c',
                          'typeString': 'literal_string \'requiredTokenAddress Failure\''
                        },
                        'value': 'requiredTokenAddress Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0a4155ffffdaca064dc0492130d948bbabedf9b4a3c7b4dba7701d2aa083061c',
                          'typeString': 'literal_string \'requiredTokenAddress Failure\''
                        }
                      ],
                      'id': 233,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '5192:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 244,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5192:118:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 245,
                  'nodeType': 'ExpressionStatement',
                  'src': '5192:118:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 253,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 249,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 247,
                            'name': 'requiredTokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 77,
                            'src': '5329:19:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 248,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '5352:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '5329:24:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 252,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 250,
                            'name': 'tokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 209,
                            'src': '5357:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 251,
                            'name': 'requiredTokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 77,
                            'src': '5372:19:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '5357:34:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5329:62:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564546f6b656e416d6f756e74204661696c757265',
                        'id': 254,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5393:29:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0dfea9330de22cf3a44a9f589d334e51ce03eb93b887fccb426b90a5cf902785',
                          'typeString': 'literal_string \'requiredTokenAmount Failure\''
                        },
                        'value': 'requiredTokenAmount Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0dfea9330de22cf3a44a9f589d334e51ce03eb93b887fccb426b90a5cf902785',
                          'typeString': 'literal_string \'requiredTokenAmount Failure\''
                        }
                      ],
                      'id': 246,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '5320:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 255,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5320:105:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 256,
                  'nodeType': 'ExpressionStatement',
                  'src': '5320:105:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 264,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 260,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 258,
                            'name': 'requiredPeriodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 79,
                            'src': '5444:21:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 259,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '5469:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '5444:26:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 263,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 261,
                            'name': 'periodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 211,
                            'src': '5474:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 262,
                            'name': 'requiredPeriodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 79,
                            'src': '5491:21:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '5474:38:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5444:68:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564506572696f645365636f6e6473204661696c757265',
                        'id': 265,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5514:31:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_829576bc6f2a6cbacb797e1e609350189547b06e13145f9ac8afe9b515c8265b',
                          'typeString': 'literal_string \'requiredPeriodSeconds Failure\''
                        },
                        'value': 'requiredPeriodSeconds Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_829576bc6f2a6cbacb797e1e609350189547b06e13145f9ac8afe9b515c8265b',
                          'typeString': 'literal_string \'requiredPeriodSeconds Failure\''
                        }
                      ],
                      'id': 257,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '5435:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 266,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5435:113:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 267,
                  'nodeType': 'ExpressionStatement',
                  'src': '5435:113:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 275,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 271,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 269,
                            'name': 'requiredGasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 81,
                            'src': '5567:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 270,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '5587:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '5567:21:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 274,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 272,
                            'name': 'gasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 213,
                            'src': '5592:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 273,
                            'name': 'requiredGasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 81,
                            'src': '5604:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '5592:28:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5567:53:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '72657175697265644761735072696365204661696c757265',
                        'id': 276,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5622:26:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0549ea7d3e61063659accdb56e119c83714b122fe72a3eca04edb4ce124397bb',
                          'typeString': 'literal_string \'requiredGasPrice Failure\''
                        },
                        'value': 'requiredGasPrice Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0549ea7d3e61063659accdb56e119c83714b122fe72a3eca04edb4ce124397bb',
                          'typeString': 'literal_string \'requiredGasPrice Failure\''
                        }
                      ],
                      'id': 268,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '5558:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 277,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5558:93:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 278,
                  'nodeType': 'ExpressionStatement',
                  'src': '5558:93:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30783139',
                                'id': 283,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '5731:4:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_25_by_1',
                                  'typeString': 'int_const 25'
                                },
                                'value': '0x19'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_25_by_1',
                                  'typeString': 'int_const 25'
                                }
                              ],
                              'id': 282,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5726:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_bytes1_$',
                                'typeString': 'type(bytes1)'
                              },
                              'typeName': 'byte'
                            },
                            'id': 284,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5726:10:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30',
                                'id': 286,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '5759:1:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                },
                                'value': '0'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                }
                              ],
                              'id': 285,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5754:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_bytes1_$',
                                'typeString': 'type(bytes1)'
                              },
                              'typeName': 'byte'
                            },
                            'id': 287,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5754:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'id': 289,
                                'name': 'this',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1374,
                                'src': '5787:4:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_contract$_Subscription_$675',
                                  'typeString': 'contract Subscription'
                                }
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_contract$_Subscription_$675',
                                  'typeString': 'contract Subscription'
                                }
                              ],
                              'id': 288,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5779:7:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_address_$',
                                'typeString': 'type(address)'
                              },
                              'typeName': 'address'
                            },
                            'id': 290,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5779:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 291,
                            'name': 'from',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 203,
                            'src': '5810:4:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 292,
                            'name': 'to',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 205,
                            'src': '5832:2:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 293,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 207,
                            'src': '5852:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 294,
                            'name': 'tokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 209,
                            'src': '5882:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 295,
                            'name': 'periodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 211,
                            'src': '5911:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 296,
                            'name': 'gasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 213,
                            'src': '5942:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            },
                            {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            },
                            {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          ],
                          'expression': {
                            'argumentTypes': null,
                            'id': 280,
                            'name': 'abi',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1338,
                            'src': '5692:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_abi',
                              'typeString': 'abi'
                            }
                          },
                          'id': 281,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'memberName': 'encodePacked',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '5692:16:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$',
                            'typeString': 'function () pure returns (bytes memory)'
                          }
                        },
                        'id': 297,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '5692:268:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'id': 279,
                      'name': 'keccak256',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 1345,
                      'src': '5669:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$',
                        'typeString': 'function (bytes memory) pure returns (bytes32)'
                      }
                    },
                    'id': 298,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5669:292:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'functionReturnParameters': 219,
                  'id': 299,
                  'nodeType': 'Return',
                  'src': '5662:299:1'
                }
              ]
            },
            'documentation': null,
            'id': 301,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'getSubscriptionHash',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 216,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 203,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4458:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 202,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4458:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 205,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4497:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 204,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4497:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 207,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4533:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 206,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4533:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 209,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4605:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 208,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4605:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 211,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4675:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 210,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4675:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 213,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4747:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 212,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4747:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 215,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4831:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 214,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4831:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4448:462:1'
            },
            'returnParameters': {
              'id': 219,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 218,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4956:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes32',
                    'typeString': 'bytes32'
                  },
                  'typeName': {
                    'id': 217,
                    'name': 'bytes32',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4956:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4955:9:1'
            },
            'scope': 675,
            'src': '4420:1548:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 317,
              'nodeType': 'Block',
              'src': '6263:84:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 314,
                        'name': 'signature',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 305,
                        'src': '6330:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'expression': {
                            'argumentTypes': null,
                            'id': 310,
                            'name': 'subscriptionHash',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 303,
                            'src': '6280:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes32',
                              'typeString': 'bytes32'
                            }
                          },
                          'id': 311,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'toEthSignedMessageHash',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': 755,
                          'src': '6280:39:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_pure$_t_bytes32_$returns$_t_bytes32_$bound_to$_t_bytes32_$',
                            'typeString': 'function (bytes32) pure returns (bytes32)'
                          }
                        },
                        'id': 312,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '6280:41:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'id': 313,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'recover',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 739,
                      'src': '6280:49:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$bound_to$_t_bytes32_$',
                        'typeString': 'function (bytes32,bytes memory) pure returns (address)'
                      }
                    },
                    'id': 315,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '6280:60:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'functionReturnParameters': 309,
                  'id': 316,
                  'nodeType': 'Return',
                  'src': '6273:67:1'
                }
              ]
            },
            'documentation': null,
            'id': 318,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'getSubscriptionSigner',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 306,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 303,
                  'name': 'subscriptionHash',
                  'nodeType': 'VariableDeclaration',
                  'scope': 318,
                  'src': '6069:24:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes32',
                    'typeString': 'bytes32'
                  },
                  'typeName': {
                    'id': 302,
                    'name': 'bytes32',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6069:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 305,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 318,
                  'src': '6126:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 304,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6126:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '6059:145:1'
            },
            'returnParameters': {
              'id': 309,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 308,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 318,
                  'src': '6250:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 307,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6250:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '6249:9:1'
            },
            'scope': 675,
            'src': '6029:318:1',
            'stateMutability': 'pure',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 409,
              'nodeType': 'Block',
              'src': '7098:633:1',
              'statements': [
                {
                  'assignments': [
                    340
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 340,
                      'name': 'subscriptionHash',
                      'nodeType': 'VariableDeclaration',
                      'scope': 409,
                      'src': '7108:24:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bytes32',
                        'typeString': 'bytes32'
                      },
                      'typeName': {
                        'id': 339,
                        'name': 'bytes32',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7108:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 350,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 342,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 320,
                        'src': '7168:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 343,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 322,
                        'src': '7174:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 344,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 324,
                        'src': '7178:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 345,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 326,
                        'src': '7192:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 346,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 328,
                        'src': '7205:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 347,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 330,
                        'src': '7220:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 348,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 332,
                        'src': '7230:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 341,
                      'name': 'getSubscriptionHash',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 301,
                      'src': '7135:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bytes32_$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256) view returns (bytes32)'
                      }
                    },
                    'id': 349,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7135:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7108:137:1'
                },
                {
                  'assignments': [
                    352
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 352,
                      'name': 'signer',
                      'nodeType': 'VariableDeclaration',
                      'scope': 409,
                      'src': '7255:14:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      },
                      'typeName': {
                        'id': 351,
                        'name': 'address',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7255:7:1',
                        'stateMutability': 'nonpayable',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 357,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 354,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 340,
                        'src': '7294:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 355,
                        'name': 'signature',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 334,
                        'src': '7312:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        },
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'id': 353,
                      'name': 'getSubscriptionSigner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 318,
                      'src': '7272:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$',
                        'typeString': 'function (bytes32,bytes memory) pure returns (address)'
                      }
                    },
                    'id': 356,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7272:50:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7255:67:1'
                },
                {
                  'assignments': [
                    359
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 359,
                      'name': 'allowance',
                      'nodeType': 'VariableDeclaration',
                      'scope': 409,
                      'src': '7332:17:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 358,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7332:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 369,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 364,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 320,
                        'src': '7382:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 366,
                            'name': 'this',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1374,
                            'src': '7396:4:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_contract$_Subscription_$675',
                              'typeString': 'contract Subscription'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_contract$_Subscription_$675',
                              'typeString': 'contract Subscription'
                            }
                          ],
                          'id': 365,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'nodeType': 'ElementaryTypeNameExpression',
                          'src': '7388:7:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_address_$',
                            'typeString': 'type(address)'
                          },
                          'typeName': 'address'
                        },
                        'id': 367,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '7388:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 361,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 324,
                            'src': '7358:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 360,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1267,
                          'src': '7352:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1267_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 362,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '7352:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1267',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 363,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'allowance',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 941,
                      'src': '7352:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$',
                        'typeString': 'function (address,address) view external returns (uint256)'
                      }
                    },
                    'id': 368,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7352:50:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7332:70:1'
                },
                {
                  'assignments': [
                    371
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 371,
                      'name': 'balance',
                      'nodeType': 'VariableDeclaration',
                      'scope': 409,
                      'src': '7412:15:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 370,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7412:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 378,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 376,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 320,
                        'src': '7460:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 373,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 324,
                            'src': '7436:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 372,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1267,
                          'src': '7430:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1267_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 374,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '7430:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1267',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 375,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'balanceOf',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 925,
                      'src': '7430:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_view$_t_address_$returns$_t_uint256_$',
                        'typeString': 'function (address) view external returns (uint256)'
                      }
                    },
                    'id': 377,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7430:35:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7412:53:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'components': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 406,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'id': 399,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'commonType': {
                              'typeIdentifier': 't_bool',
                              'typeString': 'bool'
                            },
                            'id': 392,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'leftExpression': {
                              'argumentTypes': null,
                              'commonType': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              },
                              'id': 385,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'leftExpression': {
                                'argumentTypes': null,
                                'commonType': {
                                  'typeIdentifier': 't_address',
                                  'typeString': 'address'
                                },
                                'id': 381,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'leftExpression': {
                                  'argumentTypes': null,
                                  'id': 379,
                                  'name': 'signer',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 352,
                                  'src': '7497:6:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'nodeType': 'BinaryOperation',
                                'operator': '==',
                                'rightExpression': {
                                  'argumentTypes': null,
                                  'id': 380,
                                  'name': 'from',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 320,
                                  'src': '7507:4:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'src': '7497:14:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_bool',
                                  'typeString': 'bool'
                                }
                              },
                              'nodeType': 'BinaryOperation',
                              'operator': '&&',
                              'rightExpression': {
                                'argumentTypes': null,
                                'commonType': {
                                  'typeIdentifier': 't_address',
                                  'typeString': 'address'
                                },
                                'id': 384,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'leftExpression': {
                                  'argumentTypes': null,
                                  'id': 382,
                                  'name': 'from',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 320,
                                  'src': '7527:4:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'nodeType': 'BinaryOperation',
                                'operator': '!=',
                                'rightExpression': {
                                  'argumentTypes': null,
                                  'id': 383,
                                  'name': 'to',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 322,
                                  'src': '7535:2:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'src': '7527:10:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_bool',
                                  'typeString': 'bool'
                                }
                              },
                              'src': '7497:40:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              }
                            },
                            'nodeType': 'BinaryOperation',
                            'operator': '&&',
                            'rightExpression': {
                              'argumentTypes': null,
                              'commonType': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              },
                              'id': 391,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'leftExpression': {
                                'argumentTypes': null,
                                'expression': {
                                  'argumentTypes': null,
                                  'id': 386,
                                  'name': 'block',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 1341,
                                  'src': '7553:5:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_magic_block',
                                    'typeString': 'block'
                                  }
                                },
                                'id': 387,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'memberName': 'timestamp',
                                'nodeType': 'MemberAccess',
                                'referencedDeclaration': null,
                                'src': '7553:15:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'nodeType': 'BinaryOperation',
                              'operator': '>=',
                              'rightExpression': {
                                'argumentTypes': null,
                                'baseExpression': {
                                  'argumentTypes': null,
                                  'id': 388,
                                  'name': 'nextValidTimestamp',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 85,
                                  'src': '7572:18:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                                    'typeString': 'mapping(bytes32 => uint256)'
                                  }
                                },
                                'id': 390,
                                'indexExpression': {
                                  'argumentTypes': null,
                                  'id': 389,
                                  'name': 'subscriptionHash',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 340,
                                  'src': '7591:16:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_bytes32',
                                    'typeString': 'bytes32'
                                  }
                                },
                                'isConstant': false,
                                'isLValue': true,
                                'isPure': false,
                                'lValueRequested': false,
                                'nodeType': 'IndexAccess',
                                'src': '7572:36:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'src': '7553:55:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              }
                            },
                            'src': '7497:111:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bool',
                              'typeString': 'bool'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '&&',
                          'rightExpression': {
                            'argumentTypes': null,
                            'commonType': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            'id': 398,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'leftExpression': {
                              'argumentTypes': null,
                              'id': 393,
                              'name': 'allowance',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 359,
                              'src': '7624:9:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            },
                            'nodeType': 'BinaryOperation',
                            'operator': '>=',
                            'rightExpression': {
                              'argumentTypes': null,
                              'arguments': [
                                {
                                  'argumentTypes': null,
                                  'id': 396,
                                  'name': 'gasPrice',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 330,
                                  'src': '7653:8:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_uint256',
                                    'typeString': 'uint256'
                                  }
                                }
                              ],
                              'expression': {
                                'argumentTypes': [
                                  {
                                    'typeIdentifier': 't_uint256',
                                    'typeString': 'uint256'
                                  }
                                ],
                                'expression': {
                                  'argumentTypes': null,
                                  'id': 394,
                                  'name': 'tokenAmount',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 326,
                                  'src': '7637:11:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_uint256',
                                    'typeString': 'uint256'
                                  }
                                },
                                'id': 395,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'memberName': 'add',
                                'nodeType': 'MemberAccess',
                                'referencedDeclaration': 863,
                                'src': '7637:15:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                                  'typeString': 'function (uint256,uint256) pure returns (uint256)'
                                }
                              },
                              'id': 397,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'functionCall',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '7637:25:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            },
                            'src': '7624:38:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bool',
                              'typeString': 'bool'
                            }
                          },
                          'src': '7497:165:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '&&',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 405,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 400,
                            'name': 'balance',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 371,
                            'src': '7678:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '>=',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'id': 403,
                                'name': 'gasPrice',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 330,
                                'src': '7705:8:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              ],
                              'expression': {
                                'argumentTypes': null,
                                'id': 401,
                                'name': 'tokenAmount',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 326,
                                'src': '7689:11:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'id': 402,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'add',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': 863,
                              'src': '7689:15:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                                'typeString': 'function (uint256,uint256) pure returns (uint256)'
                              }
                            },
                            'id': 404,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'kind': 'functionCall',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '7689:25:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '7678:36:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '7497:217:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'id': 407,
                    'isConstant': false,
                    'isInlineArray': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'nodeType': 'TupleExpression',
                    'src': '7483:241:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 338,
                  'id': 408,
                  'nodeType': 'Return',
                  'src': '7476:248:1'
                }
              ]
            },
            'documentation': null,
            'id': 410,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'isSubscriptionReady',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 335,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 320,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6508:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 319,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6508:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 322,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6547:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 321,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6547:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 324,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6583:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 323,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6583:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 326,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6655:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 325,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6655:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 328,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6725:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 327,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6725:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 330,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6797:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 329,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6797:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 332,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6882:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 331,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6882:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 334,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6964:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 333,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6964:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '6498:544:1'
            },
            'returnParameters': {
              'id': 338,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 337,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '7088:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 336,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '7088:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '7087:6:1'
            },
            'scope': 675,
            'src': '6470:1261:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 486,
              'nodeType': 'Block',
              'src': '8606:802:1',
              'statements': [
                {
                  'assignments': [
                    432
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 432,
                      'name': 'subscriptionHash',
                      'nodeType': 'VariableDeclaration',
                      'scope': 486,
                      'src': '8616:24:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bytes32',
                        'typeString': 'bytes32'
                      },
                      'typeName': {
                        'id': 431,
                        'name': 'bytes32',
                        'nodeType': 'ElementaryTypeName',
                        'src': '8616:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 442,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 434,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 412,
                        'src': '8676:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 435,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 414,
                        'src': '8682:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 436,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 416,
                        'src': '8686:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 437,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 418,
                        'src': '8700:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 438,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 420,
                        'src': '8713:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 439,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 422,
                        'src': '8728:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 440,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 424,
                        'src': '8738:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 433,
                      'name': 'getSubscriptionHash',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 301,
                      'src': '8643:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bytes32_$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256) view returns (bytes32)'
                      }
                    },
                    'id': 441,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '8643:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '8616:137:1'
                },
                {
                  'assignments': [
                    444
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 444,
                      'name': 'signer',
                      'nodeType': 'VariableDeclaration',
                      'scope': 486,
                      'src': '8763:14:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      },
                      'typeName': {
                        'id': 443,
                        'name': 'address',
                        'nodeType': 'ElementaryTypeName',
                        'src': '8763:7:1',
                        'stateMutability': 'nonpayable',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 449,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 446,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 432,
                        'src': '8802:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 447,
                        'name': 'signature',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 426,
                        'src': '8820:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        },
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'id': 445,
                      'name': 'getSubscriptionSigner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 318,
                      'src': '8780:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$',
                        'typeString': 'function (bytes32,bytes memory) pure returns (address)'
                      }
                    },
                    'id': 448,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '8780:50:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '8763:67:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        'id': 453,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 451,
                          'name': 'signer',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 444,
                          'src': '8887:6:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 452,
                          'name': 'from',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 412,
                          'src': '8897:4:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'src': '8887:14:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '496e76616c6964205369676e617475726520666f7220737562736372697074696f6e2063616e63656c6c6174696f6e',
                        'id': 454,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '8903:49:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_20f3baa67ddd296dfb8b9e0ec971696cfd8630a4bebb38617aeef0cee76fac0b',
                          'typeString': 'literal_string \'Invalid Signature for subscription cancellation\''
                        },
                        'value': 'Invalid Signature for subscription cancellation'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_20f3baa67ddd296dfb8b9e0ec971696cfd8630a4bebb38617aeef0cee76fac0b',
                          'typeString': 'literal_string \'Invalid Signature for subscription cancellation\''
                        }
                      ],
                      'id': 450,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '8879:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 455,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '8879:74:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 456,
                  'nodeType': 'ExpressionStatement',
                  'src': '8879:74:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        'id': 461,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 458,
                          'name': 'from',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 412,
                          'src': '9012:4:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 459,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1351,
                            'src': '9020:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 460,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '9020:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'src': '9012:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '6d73672e73656e646572206973206e6f74207468652073756273637269626572',
                        'id': 462,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '9032:34:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_b86252a974ff2529f3bb7d6f22659872d492e2e9d678b8652f19cecd6ad9fd79',
                          'typeString': 'literal_string \'msg.sender is not the subscriber\''
                        },
                        'value': 'msg.sender is not the subscriber'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_b86252a974ff2529f3bb7d6f22659872d492e2e9d678b8652f19cecd6ad9fd79',
                          'typeString': 'literal_string \'msg.sender is not the subscriber\''
                        }
                      ],
                      'id': 457,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '9004:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 463,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '9004:63:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 464,
                  'nodeType': 'ExpressionStatement',
                  'src': '9004:63:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 472,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 465,
                        'name': 'nextValidTimestamp',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 85,
                        'src': '9206:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                          'typeString': 'mapping(bytes32 => uint256)'
                        }
                      },
                      'id': 467,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 466,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 432,
                        'src': '9225:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'nodeType': 'IndexAccess',
                      'src': '9206:36:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 470,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'nodeType': 'UnaryOperation',
                          'operator': '-',
                          'prefix': true,
                          'src': '9251:2:1',
                          'subExpression': {
                            'argumentTypes': null,
                            'hexValue': '31',
                            'id': 469,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '9252:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_1_by_1',
                              'typeString': 'int_const 1'
                            },
                            'value': '1'
                          },
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        ],
                        'id': 468,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'lValueRequested': false,
                        'nodeType': 'ElementaryTypeNameExpression',
                        'src': '9243:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_type$_t_uint256_$',
                          'typeString': 'type(uint256)'
                        },
                        'typeName': 'uint256'
                      },
                      'id': 471,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'typeConversion',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '9243:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '9206:48:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 473,
                  'nodeType': 'ExpressionStatement',
                  'src': '9206:48:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 475,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 412,
                        'src': '9302:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 476,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 414,
                        'src': '9308:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 477,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 416,
                        'src': '9312:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 478,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 418,
                        'src': '9326:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 479,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 420,
                        'src': '9339:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 480,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 422,
                        'src': '9354:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 481,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 424,
                        'src': '9364:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 474,
                      'name': 'CancelSubscription',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 121,
                      'src': '9270:18:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256)'
                      }
                    },
                    'id': 482,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '9270:109:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 483,
                  'nodeType': 'EmitStatement',
                  'src': '9265:114:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'hexValue': '74727565',
                    'id': 484,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'bool',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '9397:4:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    },
                    'value': 'true'
                  },
                  'functionReturnParameters': 430,
                  'id': 485,
                  'nodeType': 'Return',
                  'src': '9390:11:1'
                }
              ]
            },
            'documentation': null,
            'id': 487,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'cancelSubscription',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 427,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 412,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8022:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 411,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8022:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 414,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8061:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 413,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8061:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 416,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8097:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 415,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8097:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 418,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8169:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 417,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8169:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 420,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8239:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 419,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8239:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 422,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8311:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 421,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8311:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 424,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8395:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 423,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8395:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 426,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8477:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 425,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8477:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '8012:543:1'
            },
            'returnParameters': {
              'id': 430,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 429,
                  'name': 'success',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8588:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 428,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8588:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '8587:14:1'
            },
            'scope': 675,
            'src': '7985:1423:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 636,
              'nodeType': 'Block',
              'src': '10189:2468:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        'id': 512,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 509,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1351,
                            'src': '10207:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 510,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '10207:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 511,
                          'name': 'relayer',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 71,
                          'src': '10221:7:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'src': '10207:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      ],
                      'id': 508,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1354,
                      'src': '10199:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$returns$__$',
                        'typeString': 'function (bool) pure'
                      }
                    },
                    'id': 513,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '10199:30:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 514,
                  'nodeType': 'ExpressionStatement',
                  'src': '10199:30:1'
                },
                {
                  'assignments': [
                    516
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 516,
                      'name': 'subscriptionHash',
                      'nodeType': 'VariableDeclaration',
                      'scope': 636,
                      'src': '10239:24:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bytes32',
                        'typeString': 'bytes32'
                      },
                      'typeName': {
                        'id': 515,
                        'name': 'bytes32',
                        'nodeType': 'ElementaryTypeName',
                        'src': '10239:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 526,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 518,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 489,
                        'src': '10299:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 519,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 491,
                        'src': '10305:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 520,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 493,
                        'src': '10309:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 521,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 495,
                        'src': '10323:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 522,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 497,
                        'src': '10336:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 523,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 499,
                        'src': '10351:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 524,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 501,
                        'src': '10361:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 517,
                      'name': 'getSubscriptionHash',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 301,
                      'src': '10266:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bytes32_$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256) view returns (bytes32)'
                      }
                    },
                    'id': 525,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '10266:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '10239:137:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 529,
                            'name': 'from',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 489,
                            'src': '10473:4:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 530,
                            'name': 'to',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 491,
                            'src': '10479:2:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 531,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 493,
                            'src': '10483:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 532,
                            'name': 'tokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 495,
                            'src': '10497:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 533,
                            'name': 'periodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 497,
                            'src': '10510:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 534,
                            'name': 'gasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 499,
                            'src': '10525:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 535,
                            'name': 'nonce',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 501,
                            'src': '10535:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 536,
                            'name': 'signature',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 503,
                            'src': '10542:9:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes_memory_ptr',
                              'typeString': 'bytes memory'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_bytes_memory_ptr',
                              'typeString': 'bytes memory'
                            }
                          ],
                          'id': 528,
                          'name': 'isSubscriptionReady',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 410,
                          'src': '10453:19:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bool_$',
                            'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256,bytes memory) view returns (bool)'
                          }
                        },
                        'id': 537,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '10453:99:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '537562736372697074696f6e206973206e6f74207265616479206f7220636f6e646974696f6e73206f66207472616e736374696f6e20617265206e6f74206d6574',
                        'id': 538,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '10554:67:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_af71f06446e1befab38ec272e173aae8220ce6336c1755fee67e531c43ea91d3',
                          'typeString': 'literal_string \'Subscription is not ready or conditions of transction are not met\''
                        },
                        'value': 'Subscription is not ready or conditions of transction are not met'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_af71f06446e1befab38ec272e173aae8220ce6336c1755fee67e531c43ea91d3',
                          'typeString': 'literal_string \'Subscription is not ready or conditions of transction are not met\''
                        }
                      ],
                      'id': 527,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '10444:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 539,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '10444:179:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 540,
                  'nodeType': 'ExpressionStatement',
                  'src': '10444:179:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 549,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 541,
                        'name': 'nextValidTimestamp',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 85,
                        'src': '10713:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                          'typeString': 'mapping(bytes32 => uint256)'
                        }
                      },
                      'id': 543,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 542,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 516,
                        'src': '10732:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'nodeType': 'IndexAccess',
                      'src': '10713:36:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 547,
                          'name': 'periodSeconds',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 497,
                          'src': '10772:13:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        ],
                        'expression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 544,
                            'name': 'block',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1341,
                            'src': '10752:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_block',
                              'typeString': 'block'
                            }
                          },
                          'id': 545,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'timestamp',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '10752:15:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 546,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'add',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': 863,
                        'src': '10752:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                          'typeString': 'function (uint256,uint256) pure returns (uint256)'
                        }
                      },
                      'id': 548,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'functionCall',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '10752:34:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '10713:73:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 550,
                  'nodeType': 'ExpressionStatement',
                  'src': '10713:73:1'
                },
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 555,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 551,
                      'name': 'nonce',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 501,
                      'src': '10905:5:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '>',
                    'rightExpression': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 552,
                        'name': 'extraNonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 89,
                        'src': '10913:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                          'typeString': 'mapping(address => uint256)'
                        }
                      },
                      'id': 554,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 553,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 489,
                        'src': '10924:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'nodeType': 'IndexAccess',
                      'src': '10913:16:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '10905:24:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 563,
                  'nodeType': 'IfStatement',
                  'src': '10902:75:1',
                  'trueBody': {
                    'id': 562,
                    'nodeType': 'Block',
                    'src': '10930:47:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'id': 560,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftHandSide': {
                            'argumentTypes': null,
                            'baseExpression': {
                              'argumentTypes': null,
                              'id': 556,
                              'name': 'extraNonce',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 89,
                              'src': '10942:10:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                                'typeString': 'mapping(address => uint256)'
                              }
                            },
                            'id': 558,
                            'indexExpression': {
                              'argumentTypes': null,
                              'id': 557,
                              'name': 'from',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 489,
                              'src': '10953:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            },
                            'isConstant': false,
                            'isLValue': true,
                            'isPure': false,
                            'lValueRequested': true,
                            'nodeType': 'IndexAccess',
                            'src': '10942:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'Assignment',
                          'operator': '=',
                          'rightHandSide': {
                            'argumentTypes': null,
                            'id': 559,
                            'name': 'nonce',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 501,
                            'src': '10961:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '10942:24:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 561,
                        'nodeType': 'ExpressionStatement',
                        'src': '10942:24:1'
                      }
                    ]
                  }
                },
                {
                  'assignments': [
                    565
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 565,
                      'name': 'startingBalance',
                      'nodeType': 'VariableDeclaration',
                      'scope': 636,
                      'src': '11062:23:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 564,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '11062:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 572,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 570,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 491,
                        'src': '11118:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 567,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 493,
                            'src': '11094:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 566,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1267,
                          'src': '11088:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1267_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 568,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '11088:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1267',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 569,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'balanceOf',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 925,
                      'src': '11088:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_view$_t_address_$returns$_t_uint256_$',
                        'typeString': 'function (address) view external returns (uint256)'
                      }
                    },
                    'id': 571,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11088:33:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '11062:59:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 577,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 489,
                        'src': '11164:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 578,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 491,
                        'src': '11169:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 579,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 495,
                        'src': '11172:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 574,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 493,
                            'src': '11137:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 573,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1267,
                          'src': '11131:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1267_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 575,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '11131:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1267',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 576,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'transferFrom',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1014,
                      'src': '11131:32:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$',
                        'typeString': 'function (address,address,uint256) external returns (bool)'
                      }
                    },
                    'id': 580,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11131:53:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'id': 581,
                  'nodeType': 'ExpressionStatement',
                  'src': '11131:53:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 593,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'components': [
                            {
                              'argumentTypes': null,
                              'commonType': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              },
                              'id': 585,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'leftExpression': {
                                'argumentTypes': null,
                                'id': 583,
                                'name': 'startingBalance',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 565,
                                'src': '11214:15:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'nodeType': 'BinaryOperation',
                              'operator': '+',
                              'rightExpression': {
                                'argumentTypes': null,
                                'id': 584,
                                'name': 'tokenAmount',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 495,
                                'src': '11230:11:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'src': '11214:27:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            }
                          ],
                          'id': 586,
                          'isConstant': false,
                          'isInlineArray': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'nodeType': 'TupleExpression',
                          'src': '11213:29:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 591,
                              'name': 'to',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 491,
                              'src': '11276:2:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            ],
                            'expression': {
                              'argumentTypes': null,
                              'arguments': [
                                {
                                  'argumentTypes': null,
                                  'id': 588,
                                  'name': 'tokenAddress',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 493,
                                  'src': '11252:12:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                }
                              ],
                              'expression': {
                                'argumentTypes': [
                                  {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                ],
                                'id': 587,
                                'name': 'ERC20',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1267,
                                'src': '11246:5:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_type$_t_contract$_ERC20_$1267_$',
                                  'typeString': 'type(contract ERC20)'
                                }
                              },
                              'id': 589,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'typeConversion',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '11246:19:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_contract$_ERC20_$1267',
                                'typeString': 'contract ERC20'
                              }
                            },
                            'id': 590,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'memberName': 'balanceOf',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 925,
                            'src': '11246:29:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_external_view$_t_address_$returns$_t_uint256_$',
                              'typeString': 'function (address) view external returns (uint256)'
                            }
                          },
                          'id': 592,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '11246:33:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'src': '11213:66:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '45524332302042616c616e636520646964206e6f74206368616e676520636f72726563746c79',
                        'id': 594,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '11291:40:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_ded71a89e8fc5dbd375e97b6164c08c2ea5d981bb8fdce6588c0434f53d059b7',
                          'typeString': 'literal_string \'ERC20 Balance did not change correctly\''
                        },
                        'value': 'ERC20 Balance did not change correctly'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_ded71a89e8fc5dbd375e97b6164c08c2ea5d981bb8fdce6588c0434f53d059b7',
                          'typeString': 'literal_string \'ERC20 Balance did not change correctly\''
                        }
                      ],
                      'id': 582,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '11194:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 595,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11194:147:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 596,
                  'nodeType': 'ExpressionStatement',
                  'src': '11194:147:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'id': 598,
                          'name': 'checkSuccess',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 652,
                          'src': '11371:12:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_pure$__$returns$_t_bool_$',
                            'typeString': 'function () pure returns (bool)'
                          }
                        },
                        'id': 599,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '11371:14:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '537562736372697074696f6e3a3a65786563757465537562736372697074696f6e205472616e7366657246726f6d206661696c6564',
                        'id': 600,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '11397:55:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_22fda53c4160a201b6c6b94643fa6d7525aa15a7f4ec1af5c52f0db455252a28',
                          'typeString': 'literal_string \'Subscription::executeSubscription TransferFrom failed\''
                        },
                        'value': 'Subscription::executeSubscription TransferFrom failed'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_22fda53c4160a201b6c6b94643fa6d7525aa15a7f4ec1af5c52f0db455252a28',
                          'typeString': 'literal_string \'Subscription::executeSubscription TransferFrom failed\''
                        }
                      ],
                      'id': 597,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '11352:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 601,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11352:112:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 602,
                  'nodeType': 'ExpressionStatement',
                  'src': '11352:112:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 604,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 489,
                        'src': '11514:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 605,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 491,
                        'src': '11520:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 606,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 493,
                        'src': '11524:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 607,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 495,
                        'src': '11538:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 608,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 497,
                        'src': '11551:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 609,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 499,
                        'src': '11566:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 610,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 501,
                        'src': '11576:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 603,
                      'name': 'ExecuteSubscription',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 105,
                      'src': '11481:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256)'
                      }
                    },
                    'id': 611,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11481:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 612,
                  'nodeType': 'EmitStatement',
                  'src': '11476:115:1'
                },
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 615,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 613,
                      'name': 'gasPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 499,
                      'src': '11811:8:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '>',
                    'rightExpression': {
                      'argumentTypes': null,
                      'hexValue': '30',
                      'id': 614,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '11822:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_0_by_1',
                        'typeString': 'int_const 0'
                      },
                      'value': '0'
                    },
                    'src': '11811:12:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 633,
                  'nodeType': 'IfStatement',
                  'src': '11807:822:1',
                  'trueBody': {
                    'id': 632,
                    'nodeType': 'Block',
                    'src': '11825:804:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 620,
                              'name': 'from',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 489,
                              'src': '12437:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            },
                            {
                              'argumentTypes': null,
                              'expression': {
                                'argumentTypes': null,
                                'id': 621,
                                'name': 'msg',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1351,
                                'src': '12443:3:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_magic_message',
                                  'typeString': 'msg'
                                }
                              },
                              'id': 622,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'sender',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': null,
                              'src': '12443:10:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address_payable',
                                'typeString': 'address payable'
                              }
                            },
                            {
                              'argumentTypes': null,
                              'id': 623,
                              'name': 'gasPrice',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 499,
                              'src': '12455:8:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              },
                              {
                                'typeIdentifier': 't_address_payable',
                                'typeString': 'address payable'
                              },
                              {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            ],
                            'expression': {
                              'argumentTypes': null,
                              'arguments': [
                                {
                                  'argumentTypes': null,
                                  'id': 617,
                                  'name': 'tokenAddress',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 493,
                                  'src': '12410:12:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                }
                              ],
                              'expression': {
                                'argumentTypes': [
                                  {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                ],
                                'id': 616,
                                'name': 'ERC20',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1267,
                                'src': '12404:5:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_type$_t_contract$_ERC20_$1267_$',
                                  'typeString': 'type(contract ERC20)'
                                }
                              },
                              'id': 618,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'typeConversion',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '12404:19:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_contract$_ERC20_$1267',
                                'typeString': 'contract ERC20'
                              }
                            },
                            'id': 619,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'memberName': 'transferFrom',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 1014,
                            'src': '12404:32:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$',
                              'typeString': 'function (address,address,uint256) external returns (bool)'
                            }
                          },
                          'id': 624,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '12404:60:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'id': 625,
                        'nodeType': 'ExpressionStatement',
                        'src': '12404:60:1'
                      },
                      {
                        'expression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'arguments': [],
                              'expression': {
                                'argumentTypes': [],
                                'id': 627,
                                'name': 'checkSuccess',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 652,
                                'src': '12503:12:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_function_internal_pure$__$returns$_t_bool_$',
                                  'typeString': 'function () pure returns (bool)'
                                }
                              },
                              'id': 628,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'functionCall',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '12503:14:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              }
                            },
                            {
                              'argumentTypes': null,
                              'hexValue': '537562736372697074696f6e3a3a65786563757465537562736372697074696f6e204661696c656420746f20706179206761732061732066726f6d206163636f756e74',
                              'id': 629,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'kind': 'string',
                              'lValueRequested': false,
                              'nodeType': 'Literal',
                              'src': '12535:69:1',
                              'subdenomination': null,
                              'typeDescriptions': {
                                'typeIdentifier': 't_stringliteral_91dfd8b130e56d88b0bb875283dbd7a93ad5846177fd31c98ad56f2a5bd9d2f7',
                                'typeString': 'literal_string \'Subscription::executeSubscription Failed to pay gas as from account\''
                              },
                              'value': 'Subscription::executeSubscription Failed to pay gas as from account'
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              },
                              {
                                'typeIdentifier': 't_stringliteral_91dfd8b130e56d88b0bb875283dbd7a93ad5846177fd31c98ad56f2a5bd9d2f7',
                                'typeString': 'literal_string \'Subscription::executeSubscription Failed to pay gas as from account\''
                              }
                            ],
                            'id': 626,
                            'name': 'require',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [
                              1354,
                              1355
                            ],
                            'referencedDeclaration': 1355,
                            'src': '12478:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                              'typeString': 'function (bool,string memory) pure'
                            }
                          },
                          'id': 630,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '12478:140:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_tuple$__$',
                            'typeString': 'tuple()'
                          }
                        },
                        'id': 631,
                        'nodeType': 'ExpressionStatement',
                        'src': '12478:140:1'
                      }
                    ]
                  }
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'hexValue': '74727565',
                    'id': 634,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'bool',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '12646:4:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    },
                    'value': 'true'
                  },
                  'functionReturnParameters': 507,
                  'id': 635,
                  'nodeType': 'Return',
                  'src': '12639:11:1'
                }
              ]
            },
            'documentation': null,
            'id': 637,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'executeSubscription',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 504,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 489,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9604:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 488,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9604:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 491,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9643:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 490,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9643:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 493,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9679:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 492,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9679:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 495,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9751:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 494,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9751:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 497,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9821:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 496,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9821:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 499,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9893:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 498,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9893:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 501,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9977:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 500,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9977:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 503,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '10060:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 502,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10060:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '9594:544:1'
            },
            'returnParameters': {
              'id': 507,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 506,
                  'name': 'success',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '10171:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 505,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10171:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '10170:14:1'
            },
            'scope': 675,
            'src': '9566:3091:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 651,
              'nodeType': 'Block',
              'src': '13157:770:1',
              'statements': [
                {
                  'assignments': [
                    643
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 643,
                      'name': 'returnValue',
                      'nodeType': 'VariableDeclaration',
                      'scope': 651,
                      'src': '13167:19:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 642,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '13167:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 645,
                  'initialValue': {
                    'argumentTypes': null,
                    'hexValue': '30',
                    'id': 644,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'number',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '13189:1:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_rational_0_by_1',
                      'typeString': 'int_const 0'
                    },
                    'value': '0'
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '13167:23:1'
                },
                {
                  'externalReferences': [
                    {
                      'returnValue': {
                        'declaration': 643,
                        'isOffset': false,
                        'isSlot': false,
                        'src': '13472:11:1',
                        'valueSize': 1
                      }
                    },
                    {
                      'returnValue': {
                        'declaration': 643,
                        'isOffset': false,
                        'isSlot': false,
                        'src': '13749:11:1',
                        'valueSize': 1
                      }
                    }
                  ],
                  'id': 646,
                  'nodeType': 'InlineAssembly',
                  'operations': '{\n    switch returndatasize()\n    case 0x0 {\n        returnValue := 1\n    }\n    case 0x20 {\n        returndatacopy(0x0, 0x0, 0x20)\n        returnValue := mload(0x0)\n    }\n    default {\n    }\n}',
                  'src': '13268:635:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 649,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 647,
                      'name': 'returnValue',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 643,
                      'src': '13904:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '!=',
                    'rightExpression': {
                      'argumentTypes': null,
                      'hexValue': '30',
                      'id': 648,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '13919:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_0_by_1',
                        'typeString': 'int_const 0'
                      },
                      'value': '0'
                    },
                    'src': '13904:16:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 641,
                  'id': 650,
                  'nodeType': 'Return',
                  'src': '13897:23:1'
                }
              ]
            },
            'documentation': 'Checks the return value of the previous function. Returns true if the previous function\nfunction returned 32 non-zero bytes or returned zero bytes.',
            'id': 652,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'checkSuccess',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 638,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '13093:7:1'
            },
            'returnParameters': {
              'id': 641,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 640,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 652,
                  'src': '13147:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 639,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '13147:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '13146:6:1'
            },
            'scope': 675,
            'src': '13072:855:1',
            'stateMutability': 'pure',
            'superFunction': null,
            'visibility': 'private'
          },
          {
            'body': {
              'id': 666,
              'nodeType': 'Block',
              'src': '14101:70:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        'id': 659,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 656,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1351,
                            'src': '14117:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 657,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '14117:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 658,
                          'name': 'author',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 69,
                          'src': '14129:6:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'src': '14117:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      ],
                      'id': 655,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1354,
                      'src': '14109:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$returns$__$',
                        'typeString': 'function (bool) pure'
                      }
                    },
                    'id': 660,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '14109:27:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 661,
                  'nodeType': 'ExpressionStatement',
                  'src': '14109:27:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 663,
                        'name': 'author',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 69,
                        'src': '14157:6:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      ],
                      'id': 662,
                      'name': 'selfdestruct',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 1359,
                      'src': '14144:12:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_selfdestruct_nonpayable$_t_address_payable_$returns$__$',
                        'typeString': 'function (address payable)'
                      }
                    },
                    'id': 664,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '14144:20:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 665,
                  'nodeType': 'ExpressionStatement',
                  'src': '14144:20:1'
                }
              ]
            },
            'documentation': null,
            'id': 667,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'endContract',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 653,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14077:2:1'
            },
            'returnParameters': {
              'id': 654,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14101:0:1'
            },
            'scope': 675,
            'src': '14057:114:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'external'
          },
          {
            'body': {
              'id': 673,
              'nodeType': 'Block',
              'src': '14277:25:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [],
                    'expression': {
                      'argumentTypes': [],
                      'id': 670,
                      'name': 'revert',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1356,
                        1357
                      ],
                      'referencedDeclaration': 1356,
                      'src': '14286:6:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_revert_pure$__$returns$__$',
                        'typeString': 'function () pure'
                      }
                    },
                    'id': 671,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '14286:9:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 672,
                  'nodeType': 'ExpressionStatement',
                  'src': '14286:9:1'
                }
              ]
            },
            'documentation': null,
            'id': 674,
            'implemented': true,
            'kind': 'fallback',
            'modifiers': [],
            'name': '',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 668,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14257:2:1'
            },
            'returnParameters': {
              'id': 669,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14277:0:1'
            },
            'scope': 675,
            'src': '14248:54:1',
            'stateMutability': 'payable',
            'superFunction': null,
            'visibility': 'external'
          }
        ],
        'scope': 676,
        'src': '1091:13213:1'
      }
    ],
    'src': '0:14305:1'
  },
  'legacyAST': {
    'absolutePath': '/Users/danlipert/gitcoin/grants1337/contracts/Subscription.sol',
    'exportedSymbols': {
      'Subscription': [
        675
      ]
    },
    'id': 676,
    'nodeType': 'SourceUnit',
    'nodes': [
      {
        'id': 58,
        'literals': [
          'solidity',
          '^',
          '0.5',
          '.2'
        ],
        'nodeType': 'PragmaDirective',
        'src': '0:23:1'
      },
      {
        'absolutePath': 'openzeppelin-solidity/contracts/cryptography/ECDSA.sol',
        'file': 'openzeppelin-solidity/contracts/cryptography/ECDSA.sol',
        'id': 59,
        'nodeType': 'ImportDirective',
        'scope': 676,
        'sourceUnit': 757,
        'src': '900:64:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': 'openzeppelin-solidity/contracts/math/SafeMath.sol',
        'file': 'openzeppelin-solidity/contracts/math/SafeMath.sol',
        'id': 60,
        'nodeType': 'ImportDirective',
        'scope': 676,
        'sourceUnit': 885,
        'src': '965:59:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol',
        'file': 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol',
        'id': 61,
        'nodeType': 'ImportDirective',
        'scope': 676,
        'sourceUnit': 1268,
        'src': '1025:63:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'baseContracts': [],
        'contractDependencies': [],
        'contractKind': 'contract',
        'documentation': null,
        'fullyImplemented': true,
        'id': 675,
        'linearizedBaseContracts': [
          675
        ],
        'name': 'Subscription',
        'nodeType': 'ContractDefinition',
        'nodes': [
          {
            'id': 64,
            'libraryName': {
              'contractScope': null,
              'id': 62,
              'name': 'ECDSA',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 756,
              'src': '1125:5:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_ECDSA_$756',
                'typeString': 'library ECDSA'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '1119:24:1',
            'typeName': {
              'id': 63,
              'name': 'bytes32',
              'nodeType': 'ElementaryTypeName',
              'src': '1135:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_bytes32',
                'typeString': 'bytes32'
              }
            }
          },
          {
            'id': 67,
            'libraryName': {
              'contractScope': null,
              'id': 65,
              'name': 'SafeMath',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 884,
              'src': '1154:8:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_SafeMath_$884',
                'typeString': 'library SafeMath'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '1148:27:1',
            'typeName': {
              'id': 66,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1167:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            }
          },
          {
            'constant': false,
            'id': 69,
            'name': 'author',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1212:29:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address_payable',
              'typeString': 'address payable'
            },
            'typeName': {
              'id': 68,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1212:15:1',
              'stateMutability': 'payable',
              'typeDescriptions': {
                'typeIdentifier': 't_address_payable',
                'typeString': 'address payable'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 71,
            'name': 'relayer',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1288:22:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address',
              'typeString': 'address'
            },
            'typeName': {
              'id': 70,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1288:7:1',
              'stateMutability': 'nonpayable',
              'typeDescriptions': {
                'typeIdentifier': 't_address',
                'typeString': 'address'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 73,
            'name': 'requiredToAddress',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1470:32:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address',
              'typeString': 'address'
            },
            'typeName': {
              'id': 72,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1470:7:1',
              'stateMutability': 'nonpayable',
              'typeDescriptions': {
                'typeIdentifier': 't_address',
                'typeString': 'address'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 75,
            'name': 'requiredTokenAddress',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1508:35:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address',
              'typeString': 'address'
            },
            'typeName': {
              'id': 74,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1508:7:1',
              'stateMutability': 'nonpayable',
              'typeDescriptions': {
                'typeIdentifier': 't_address',
                'typeString': 'address'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 77,
            'name': 'requiredTokenAmount',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1549:34:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 76,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1549:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 79,
            'name': 'requiredPeriodSeconds',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1589:36:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 78,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1589:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 81,
            'name': 'requiredGasPrice',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1631:31:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 80,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1631:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 85,
            'name': 'nextValidTimestamp',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '1854:53:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
              'typeString': 'mapping(bytes32 => uint256)'
            },
            'typeName': {
              'id': 84,
              'keyType': {
                'id': 82,
                'name': 'bytes32',
                'nodeType': 'ElementaryTypeName',
                'src': '1862:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_bytes32',
                  'typeString': 'bytes32'
                }
              },
              'nodeType': 'Mapping',
              'src': '1854:27:1',
              'typeDescriptions': {
                'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                'typeString': 'mapping(bytes32 => uint256)'
              },
              'valueType': {
                'id': 83,
                'name': 'uint256',
                'nodeType': 'ElementaryTypeName',
                'src': '1873:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                }
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 89,
            'name': 'extraNonce',
            'nodeType': 'VariableDeclaration',
            'scope': 675,
            'src': '2088:45:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
              'typeString': 'mapping(address => uint256)'
            },
            'typeName': {
              'id': 88,
              'keyType': {
                'id': 86,
                'name': 'address',
                'nodeType': 'ElementaryTypeName',
                'src': '2096:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_address',
                  'typeString': 'address'
                }
              },
              'nodeType': 'Mapping',
              'src': '2088:27:1',
              'typeDescriptions': {
                'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                'typeString': 'mapping(address => uint256)'
              },
              'valueType': {
                'id': 87,
                'name': 'uint256',
                'nodeType': 'ElementaryTypeName',
                'src': '2107:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                }
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 105,
            'name': 'ExecuteSubscription',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 104,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 91,
                  'indexed': true,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2175:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 90,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2175:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 93,
                  'indexed': true,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2222:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 92,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2222:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 95,
                  'indexed': false,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2266:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 94,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2266:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 97,
                  'indexed': false,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2338:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 96,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2338:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 99,
                  'indexed': false,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2408:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 98,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2408:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 101,
                  'indexed': false,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2480:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 100,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2480:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 103,
                  'indexed': false,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 105,
                  'src': '2557:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 102,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2557:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2165:471:1'
            },
            'src': '2140:497:1'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 121,
            'name': 'CancelSubscription',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 120,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 107,
                  'indexed': true,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '2677:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 106,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2677:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 109,
                  'indexed': true,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '2724:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 108,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2724:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 111,
                  'indexed': false,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '2768:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 110,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2768:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 113,
                  'indexed': false,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '2840:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 112,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2840:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 115,
                  'indexed': false,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '2910:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 114,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2910:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 117,
                  'indexed': false,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '2982:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 116,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2982:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 119,
                  'indexed': false,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 121,
                  'src': '3059:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 118,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3059:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2667:471:1'
            },
            'src': '2643:496:1'
          },
          {
            'body': {
              'id': 167,
              'nodeType': 'Block',
              'src': '3368:266:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 140,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 138,
                      'name': 'requiredToAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 73,
                      'src': '3378:17:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 139,
                      'name': '_toAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 123,
                      'src': '3396:10:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'src': '3378:28:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'id': 141,
                  'nodeType': 'ExpressionStatement',
                  'src': '3378:28:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 144,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 142,
                      'name': 'requiredTokenAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 75,
                      'src': '3416:20:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 143,
                      'name': '_tokenAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 125,
                      'src': '3437:13:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'src': '3416:34:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'id': 145,
                  'nodeType': 'ExpressionStatement',
                  'src': '3416:34:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 148,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 146,
                      'name': 'requiredTokenAmount',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 77,
                      'src': '3460:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 147,
                      'name': '_tokenAmount',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 127,
                      'src': '3480:12:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3460:32:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 149,
                  'nodeType': 'ExpressionStatement',
                  'src': '3460:32:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 152,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 150,
                      'name': 'requiredPeriodSeconds',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 79,
                      'src': '3502:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 151,
                      'name': '_periodSeconds',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 129,
                      'src': '3524:14:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3502:36:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 153,
                  'nodeType': 'ExpressionStatement',
                  'src': '3502:36:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 156,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 154,
                      'name': 'requiredGasPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 81,
                      'src': '3548:16:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 155,
                      'name': '_gasPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 131,
                      'src': '3565:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3548:26:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 157,
                  'nodeType': 'ExpressionStatement',
                  'src': '3548:26:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 161,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 158,
                      'name': 'author',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 69,
                      'src': '3584:6:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address_payable',
                        'typeString': 'address payable'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'id': 159,
                        'name': 'msg',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 1351,
                        'src': '3591:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_magic_message',
                          'typeString': 'msg'
                        }
                      },
                      'id': 160,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'sender',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': null,
                      'src': '3591:10:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address_payable',
                        'typeString': 'address payable'
                      }
                    },
                    'src': '3584:17:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address_payable',
                      'typeString': 'address payable'
                    }
                  },
                  'id': 162,
                  'nodeType': 'ExpressionStatement',
                  'src': '3584:17:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 165,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 163,
                      'name': 'relayer',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 71,
                      'src': '3611:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 164,
                      'name': '_relayer',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 135,
                      'src': '3619:8:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'src': '3611:16:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'id': 166,
                  'nodeType': 'ExpressionStatement',
                  'src': '3611:16:1'
                }
              ]
            },
            'documentation': null,
            'id': 168,
            'implemented': true,
            'kind': 'constructor',
            'modifiers': [],
            'name': '',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 136,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 123,
                  'name': '_toAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3166:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 122,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3166:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 125,
                  'name': '_tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3194:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 124,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3194:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 127,
                  'name': '_tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3225:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 126,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3225:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 129,
                  'name': '_periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3255:22:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 128,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3255:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 131,
                  'name': '_gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3287:17:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 130,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3287:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 133,
                  'name': '_version',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3314:14:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint8',
                    'typeString': 'uint8'
                  },
                  'typeName': {
                    'id': 132,
                    'name': 'uint8',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3314:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint8',
                      'typeString': 'uint8'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 135,
                  'name': '_relayer',
                  'nodeType': 'VariableDeclaration',
                  'scope': 168,
                  'src': '3338:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 134,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3338:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3156:204:1'
            },
            'returnParameters': {
              'id': 137,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '3368:0:1'
            },
            'scope': 675,
            'src': '3145:489:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 200,
              'nodeType': 'Block',
              'src': '4037:227:1',
              'statements': [
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 184,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 177,
                        'name': 'nextValidTimestamp',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 85,
                        'src': '4050:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                          'typeString': 'mapping(bytes32 => uint256)'
                        }
                      },
                      'id': 179,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 178,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 170,
                        'src': '4069:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'nodeType': 'IndexAccess',
                      'src': '4050:36:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '==',
                    'rightExpression': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 182,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'nodeType': 'UnaryOperation',
                          'operator': '-',
                          'prefix': true,
                          'src': '4096:2:1',
                          'subExpression': {
                            'argumentTypes': null,
                            'hexValue': '31',
                            'id': 181,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '4097:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_1_by_1',
                              'typeString': 'int_const 1'
                            },
                            'value': '1'
                          },
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        ],
                        'id': 180,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'lValueRequested': false,
                        'nodeType': 'ElementaryTypeNameExpression',
                        'src': '4088:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_type$_t_uint256_$',
                          'typeString': 'type(uint256)'
                        },
                        'typeName': 'uint256'
                      },
                      'id': 183,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'typeConversion',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '4088:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '4050:49:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 188,
                  'nodeType': 'IfStatement',
                  'src': '4047:88:1',
                  'trueBody': {
                    'id': 187,
                    'nodeType': 'Block',
                    'src': '4100:35:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'hexValue': '66616c7365',
                          'id': 185,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'bool',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '4119:5:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'value': 'false'
                        },
                        'functionReturnParameters': 176,
                        'id': 186,
                        'nodeType': 'Return',
                        'src': '4112:12:1'
                      }
                    ]
                  }
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'components': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 197,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 189,
                            'name': 'block',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1341,
                            'src': '4152:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_block',
                              'typeString': 'block'
                            }
                          },
                          'id': 190,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'timestamp',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '4152:15:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '<=',
                        'rightExpression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 195,
                              'name': 'gracePeriodSeconds',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 172,
                              'src': '4228:18:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            ],
                            'expression': {
                              'argumentTypes': null,
                              'baseExpression': {
                                'argumentTypes': null,
                                'id': 191,
                                'name': 'nextValidTimestamp',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 85,
                                'src': '4187:18:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                                  'typeString': 'mapping(bytes32 => uint256)'
                                }
                              },
                              'id': 193,
                              'indexExpression': {
                                'argumentTypes': null,
                                'id': 192,
                                'name': 'subscriptionHash',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 170,
                                'src': '4206:16:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_bytes32',
                                  'typeString': 'bytes32'
                                }
                              },
                              'isConstant': false,
                              'isLValue': true,
                              'isPure': false,
                              'lValueRequested': false,
                              'nodeType': 'IndexAccess',
                              'src': '4187:36:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            },
                            'id': 194,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'memberName': 'add',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 863,
                            'src': '4187:40:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                              'typeString': 'function (uint256,uint256) pure returns (uint256)'
                            }
                          },
                          'id': 196,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '4187:60:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'src': '4152:95:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'id': 198,
                    'isConstant': false,
                    'isInlineArray': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'nodeType': 'TupleExpression',
                    'src': '4151:106:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 176,
                  'id': 199,
                  'nodeType': 'Return',
                  'src': '4144:113:1'
                }
              ]
            },
            'documentation': null,
            'id': 201,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'isSubscriptionActive',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 173,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 170,
                  'name': 'subscriptionHash',
                  'nodeType': 'VariableDeclaration',
                  'scope': 201,
                  'src': '3913:24:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes32',
                    'typeString': 'bytes32'
                  },
                  'typeName': {
                    'id': 169,
                    'name': 'bytes32',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3913:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 172,
                  'name': 'gracePeriodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 201,
                  'src': '3947:26:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 171,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3947:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3903:76:1'
            },
            'returnParameters': {
              'id': 176,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 175,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 201,
                  'src': '4027:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 174,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4027:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4026:6:1'
            },
            'scope': 675,
            'src': '3874:390:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'external'
          },
          {
            'body': {
              'id': 300,
              'nodeType': 'Block',
              'src': '4969:999:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 229,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 225,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 221,
                            'name': 'requiredToAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 73,
                            'src': '5093:17:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30',
                                'id': 223,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '5122:1:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                },
                                'value': '0'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                }
                              ],
                              'id': 222,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5114:7:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_address_$',
                                'typeString': 'type(address)'
                              },
                              'typeName': 'address'
                            },
                            'id': 224,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5114:10:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            }
                          },
                          'src': '5093:31:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 228,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 226,
                            'name': 'to',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 205,
                            'src': '5128:2:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 227,
                            'name': 'requiredToAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 73,
                            'src': '5134:17:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'src': '5128:23:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5093:58:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564546f41646472657373204661696c757265',
                        'id': 230,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5153:27:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_1780bcf794aab203f72828cdd8822e2720f64bbe143d842ce30f054eabc78430',
                          'typeString': 'literal_string \'requiredToAddress Failure\''
                        },
                        'value': 'requiredToAddress Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_1780bcf794aab203f72828cdd8822e2720f64bbe143d842ce30f054eabc78430',
                          'typeString': 'literal_string \'requiredToAddress Failure\''
                        }
                      ],
                      'id': 220,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '5084:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 231,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5084:98:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 232,
                  'nodeType': 'ExpressionStatement',
                  'src': '5084:98:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 242,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 238,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 234,
                            'name': 'requiredTokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 75,
                            'src': '5201:20:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30',
                                'id': 236,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '5233:1:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                },
                                'value': '0'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                }
                              ],
                              'id': 235,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5225:7:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_address_$',
                                'typeString': 'type(address)'
                              },
                              'typeName': 'address'
                            },
                            'id': 237,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5225:10:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            }
                          },
                          'src': '5201:34:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 241,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 239,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 207,
                            'src': '5239:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 240,
                            'name': 'requiredTokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 75,
                            'src': '5255:20:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'src': '5239:36:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5201:74:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564546f6b656e41646472657373204661696c757265',
                        'id': 243,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5277:30:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0a4155ffffdaca064dc0492130d948bbabedf9b4a3c7b4dba7701d2aa083061c',
                          'typeString': 'literal_string \'requiredTokenAddress Failure\''
                        },
                        'value': 'requiredTokenAddress Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0a4155ffffdaca064dc0492130d948bbabedf9b4a3c7b4dba7701d2aa083061c',
                          'typeString': 'literal_string \'requiredTokenAddress Failure\''
                        }
                      ],
                      'id': 233,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '5192:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 244,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5192:118:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 245,
                  'nodeType': 'ExpressionStatement',
                  'src': '5192:118:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 253,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 249,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 247,
                            'name': 'requiredTokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 77,
                            'src': '5329:19:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 248,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '5352:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '5329:24:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 252,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 250,
                            'name': 'tokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 209,
                            'src': '5357:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 251,
                            'name': 'requiredTokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 77,
                            'src': '5372:19:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '5357:34:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5329:62:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564546f6b656e416d6f756e74204661696c757265',
                        'id': 254,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5393:29:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0dfea9330de22cf3a44a9f589d334e51ce03eb93b887fccb426b90a5cf902785',
                          'typeString': 'literal_string \'requiredTokenAmount Failure\''
                        },
                        'value': 'requiredTokenAmount Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0dfea9330de22cf3a44a9f589d334e51ce03eb93b887fccb426b90a5cf902785',
                          'typeString': 'literal_string \'requiredTokenAmount Failure\''
                        }
                      ],
                      'id': 246,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '5320:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 255,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5320:105:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 256,
                  'nodeType': 'ExpressionStatement',
                  'src': '5320:105:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 264,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 260,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 258,
                            'name': 'requiredPeriodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 79,
                            'src': '5444:21:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 259,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '5469:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '5444:26:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 263,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 261,
                            'name': 'periodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 211,
                            'src': '5474:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 262,
                            'name': 'requiredPeriodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 79,
                            'src': '5491:21:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '5474:38:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5444:68:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564506572696f645365636f6e6473204661696c757265',
                        'id': 265,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5514:31:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_829576bc6f2a6cbacb797e1e609350189547b06e13145f9ac8afe9b515c8265b',
                          'typeString': 'literal_string \'requiredPeriodSeconds Failure\''
                        },
                        'value': 'requiredPeriodSeconds Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_829576bc6f2a6cbacb797e1e609350189547b06e13145f9ac8afe9b515c8265b',
                          'typeString': 'literal_string \'requiredPeriodSeconds Failure\''
                        }
                      ],
                      'id': 257,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '5435:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 266,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5435:113:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 267,
                  'nodeType': 'ExpressionStatement',
                  'src': '5435:113:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 275,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 271,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 269,
                            'name': 'requiredGasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 81,
                            'src': '5567:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 270,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '5587:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '5567:21:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 274,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 272,
                            'name': 'gasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 213,
                            'src': '5592:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 273,
                            'name': 'requiredGasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 81,
                            'src': '5604:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '5592:28:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5567:53:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '72657175697265644761735072696365204661696c757265',
                        'id': 276,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5622:26:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0549ea7d3e61063659accdb56e119c83714b122fe72a3eca04edb4ce124397bb',
                          'typeString': 'literal_string \'requiredGasPrice Failure\''
                        },
                        'value': 'requiredGasPrice Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0549ea7d3e61063659accdb56e119c83714b122fe72a3eca04edb4ce124397bb',
                          'typeString': 'literal_string \'requiredGasPrice Failure\''
                        }
                      ],
                      'id': 268,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '5558:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 277,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5558:93:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 278,
                  'nodeType': 'ExpressionStatement',
                  'src': '5558:93:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30783139',
                                'id': 283,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '5731:4:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_25_by_1',
                                  'typeString': 'int_const 25'
                                },
                                'value': '0x19'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_25_by_1',
                                  'typeString': 'int_const 25'
                                }
                              ],
                              'id': 282,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5726:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_bytes1_$',
                                'typeString': 'type(bytes1)'
                              },
                              'typeName': 'byte'
                            },
                            'id': 284,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5726:10:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30',
                                'id': 286,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '5759:1:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                },
                                'value': '0'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                }
                              ],
                              'id': 285,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5754:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_bytes1_$',
                                'typeString': 'type(bytes1)'
                              },
                              'typeName': 'byte'
                            },
                            'id': 287,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5754:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'id': 289,
                                'name': 'this',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1374,
                                'src': '5787:4:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_contract$_Subscription_$675',
                                  'typeString': 'contract Subscription'
                                }
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_contract$_Subscription_$675',
                                  'typeString': 'contract Subscription'
                                }
                              ],
                              'id': 288,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5779:7:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_address_$',
                                'typeString': 'type(address)'
                              },
                              'typeName': 'address'
                            },
                            'id': 290,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5779:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 291,
                            'name': 'from',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 203,
                            'src': '5810:4:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 292,
                            'name': 'to',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 205,
                            'src': '5832:2:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 293,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 207,
                            'src': '5852:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 294,
                            'name': 'tokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 209,
                            'src': '5882:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 295,
                            'name': 'periodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 211,
                            'src': '5911:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 296,
                            'name': 'gasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 213,
                            'src': '5942:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            },
                            {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            },
                            {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          ],
                          'expression': {
                            'argumentTypes': null,
                            'id': 280,
                            'name': 'abi',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1338,
                            'src': '5692:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_abi',
                              'typeString': 'abi'
                            }
                          },
                          'id': 281,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'memberName': 'encodePacked',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '5692:16:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$',
                            'typeString': 'function () pure returns (bytes memory)'
                          }
                        },
                        'id': 297,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '5692:268:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'id': 279,
                      'name': 'keccak256',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 1345,
                      'src': '5669:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$',
                        'typeString': 'function (bytes memory) pure returns (bytes32)'
                      }
                    },
                    'id': 298,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5669:292:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'functionReturnParameters': 219,
                  'id': 299,
                  'nodeType': 'Return',
                  'src': '5662:299:1'
                }
              ]
            },
            'documentation': null,
            'id': 301,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'getSubscriptionHash',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 216,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 203,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4458:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 202,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4458:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 205,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4497:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 204,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4497:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 207,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4533:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 206,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4533:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 209,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4605:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 208,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4605:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 211,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4675:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 210,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4675:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 213,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4747:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 212,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4747:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 215,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4831:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 214,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4831:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4448:462:1'
            },
            'returnParameters': {
              'id': 219,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 218,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 301,
                  'src': '4956:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes32',
                    'typeString': 'bytes32'
                  },
                  'typeName': {
                    'id': 217,
                    'name': 'bytes32',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4956:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4955:9:1'
            },
            'scope': 675,
            'src': '4420:1548:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 317,
              'nodeType': 'Block',
              'src': '6263:84:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 314,
                        'name': 'signature',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 305,
                        'src': '6330:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'expression': {
                            'argumentTypes': null,
                            'id': 310,
                            'name': 'subscriptionHash',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 303,
                            'src': '6280:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes32',
                              'typeString': 'bytes32'
                            }
                          },
                          'id': 311,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'toEthSignedMessageHash',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': 755,
                          'src': '6280:39:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_pure$_t_bytes32_$returns$_t_bytes32_$bound_to$_t_bytes32_$',
                            'typeString': 'function (bytes32) pure returns (bytes32)'
                          }
                        },
                        'id': 312,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '6280:41:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'id': 313,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'recover',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 739,
                      'src': '6280:49:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$bound_to$_t_bytes32_$',
                        'typeString': 'function (bytes32,bytes memory) pure returns (address)'
                      }
                    },
                    'id': 315,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '6280:60:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'functionReturnParameters': 309,
                  'id': 316,
                  'nodeType': 'Return',
                  'src': '6273:67:1'
                }
              ]
            },
            'documentation': null,
            'id': 318,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'getSubscriptionSigner',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 306,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 303,
                  'name': 'subscriptionHash',
                  'nodeType': 'VariableDeclaration',
                  'scope': 318,
                  'src': '6069:24:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes32',
                    'typeString': 'bytes32'
                  },
                  'typeName': {
                    'id': 302,
                    'name': 'bytes32',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6069:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 305,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 318,
                  'src': '6126:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 304,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6126:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '6059:145:1'
            },
            'returnParameters': {
              'id': 309,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 308,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 318,
                  'src': '6250:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 307,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6250:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '6249:9:1'
            },
            'scope': 675,
            'src': '6029:318:1',
            'stateMutability': 'pure',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 409,
              'nodeType': 'Block',
              'src': '7098:633:1',
              'statements': [
                {
                  'assignments': [
                    340
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 340,
                      'name': 'subscriptionHash',
                      'nodeType': 'VariableDeclaration',
                      'scope': 409,
                      'src': '7108:24:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bytes32',
                        'typeString': 'bytes32'
                      },
                      'typeName': {
                        'id': 339,
                        'name': 'bytes32',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7108:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 350,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 342,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 320,
                        'src': '7168:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 343,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 322,
                        'src': '7174:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 344,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 324,
                        'src': '7178:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 345,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 326,
                        'src': '7192:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 346,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 328,
                        'src': '7205:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 347,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 330,
                        'src': '7220:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 348,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 332,
                        'src': '7230:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 341,
                      'name': 'getSubscriptionHash',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 301,
                      'src': '7135:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bytes32_$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256) view returns (bytes32)'
                      }
                    },
                    'id': 349,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7135:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7108:137:1'
                },
                {
                  'assignments': [
                    352
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 352,
                      'name': 'signer',
                      'nodeType': 'VariableDeclaration',
                      'scope': 409,
                      'src': '7255:14:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      },
                      'typeName': {
                        'id': 351,
                        'name': 'address',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7255:7:1',
                        'stateMutability': 'nonpayable',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 357,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 354,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 340,
                        'src': '7294:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 355,
                        'name': 'signature',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 334,
                        'src': '7312:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        },
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'id': 353,
                      'name': 'getSubscriptionSigner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 318,
                      'src': '7272:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$',
                        'typeString': 'function (bytes32,bytes memory) pure returns (address)'
                      }
                    },
                    'id': 356,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7272:50:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7255:67:1'
                },
                {
                  'assignments': [
                    359
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 359,
                      'name': 'allowance',
                      'nodeType': 'VariableDeclaration',
                      'scope': 409,
                      'src': '7332:17:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 358,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7332:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 369,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 364,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 320,
                        'src': '7382:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 366,
                            'name': 'this',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1374,
                            'src': '7396:4:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_contract$_Subscription_$675',
                              'typeString': 'contract Subscription'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_contract$_Subscription_$675',
                              'typeString': 'contract Subscription'
                            }
                          ],
                          'id': 365,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'nodeType': 'ElementaryTypeNameExpression',
                          'src': '7388:7:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_address_$',
                            'typeString': 'type(address)'
                          },
                          'typeName': 'address'
                        },
                        'id': 367,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '7388:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 361,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 324,
                            'src': '7358:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 360,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1267,
                          'src': '7352:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1267_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 362,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '7352:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1267',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 363,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'allowance',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 941,
                      'src': '7352:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$',
                        'typeString': 'function (address,address) view external returns (uint256)'
                      }
                    },
                    'id': 368,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7352:50:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7332:70:1'
                },
                {
                  'assignments': [
                    371
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 371,
                      'name': 'balance',
                      'nodeType': 'VariableDeclaration',
                      'scope': 409,
                      'src': '7412:15:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 370,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7412:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 378,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 376,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 320,
                        'src': '7460:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 373,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 324,
                            'src': '7436:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 372,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1267,
                          'src': '7430:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1267_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 374,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '7430:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1267',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 375,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'balanceOf',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 925,
                      'src': '7430:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_view$_t_address_$returns$_t_uint256_$',
                        'typeString': 'function (address) view external returns (uint256)'
                      }
                    },
                    'id': 377,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7430:35:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7412:53:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'components': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 406,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'id': 399,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'commonType': {
                              'typeIdentifier': 't_bool',
                              'typeString': 'bool'
                            },
                            'id': 392,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'leftExpression': {
                              'argumentTypes': null,
                              'commonType': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              },
                              'id': 385,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'leftExpression': {
                                'argumentTypes': null,
                                'commonType': {
                                  'typeIdentifier': 't_address',
                                  'typeString': 'address'
                                },
                                'id': 381,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'leftExpression': {
                                  'argumentTypes': null,
                                  'id': 379,
                                  'name': 'signer',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 352,
                                  'src': '7497:6:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'nodeType': 'BinaryOperation',
                                'operator': '==',
                                'rightExpression': {
                                  'argumentTypes': null,
                                  'id': 380,
                                  'name': 'from',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 320,
                                  'src': '7507:4:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'src': '7497:14:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_bool',
                                  'typeString': 'bool'
                                }
                              },
                              'nodeType': 'BinaryOperation',
                              'operator': '&&',
                              'rightExpression': {
                                'argumentTypes': null,
                                'commonType': {
                                  'typeIdentifier': 't_address',
                                  'typeString': 'address'
                                },
                                'id': 384,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'leftExpression': {
                                  'argumentTypes': null,
                                  'id': 382,
                                  'name': 'from',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 320,
                                  'src': '7527:4:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'nodeType': 'BinaryOperation',
                                'operator': '!=',
                                'rightExpression': {
                                  'argumentTypes': null,
                                  'id': 383,
                                  'name': 'to',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 322,
                                  'src': '7535:2:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'src': '7527:10:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_bool',
                                  'typeString': 'bool'
                                }
                              },
                              'src': '7497:40:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              }
                            },
                            'nodeType': 'BinaryOperation',
                            'operator': '&&',
                            'rightExpression': {
                              'argumentTypes': null,
                              'commonType': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              },
                              'id': 391,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'leftExpression': {
                                'argumentTypes': null,
                                'expression': {
                                  'argumentTypes': null,
                                  'id': 386,
                                  'name': 'block',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 1341,
                                  'src': '7553:5:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_magic_block',
                                    'typeString': 'block'
                                  }
                                },
                                'id': 387,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'memberName': 'timestamp',
                                'nodeType': 'MemberAccess',
                                'referencedDeclaration': null,
                                'src': '7553:15:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'nodeType': 'BinaryOperation',
                              'operator': '>=',
                              'rightExpression': {
                                'argumentTypes': null,
                                'baseExpression': {
                                  'argumentTypes': null,
                                  'id': 388,
                                  'name': 'nextValidTimestamp',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 85,
                                  'src': '7572:18:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                                    'typeString': 'mapping(bytes32 => uint256)'
                                  }
                                },
                                'id': 390,
                                'indexExpression': {
                                  'argumentTypes': null,
                                  'id': 389,
                                  'name': 'subscriptionHash',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 340,
                                  'src': '7591:16:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_bytes32',
                                    'typeString': 'bytes32'
                                  }
                                },
                                'isConstant': false,
                                'isLValue': true,
                                'isPure': false,
                                'lValueRequested': false,
                                'nodeType': 'IndexAccess',
                                'src': '7572:36:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'src': '7553:55:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              }
                            },
                            'src': '7497:111:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bool',
                              'typeString': 'bool'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '&&',
                          'rightExpression': {
                            'argumentTypes': null,
                            'commonType': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            'id': 398,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'leftExpression': {
                              'argumentTypes': null,
                              'id': 393,
                              'name': 'allowance',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 359,
                              'src': '7624:9:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            },
                            'nodeType': 'BinaryOperation',
                            'operator': '>=',
                            'rightExpression': {
                              'argumentTypes': null,
                              'arguments': [
                                {
                                  'argumentTypes': null,
                                  'id': 396,
                                  'name': 'gasPrice',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 330,
                                  'src': '7653:8:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_uint256',
                                    'typeString': 'uint256'
                                  }
                                }
                              ],
                              'expression': {
                                'argumentTypes': [
                                  {
                                    'typeIdentifier': 't_uint256',
                                    'typeString': 'uint256'
                                  }
                                ],
                                'expression': {
                                  'argumentTypes': null,
                                  'id': 394,
                                  'name': 'tokenAmount',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 326,
                                  'src': '7637:11:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_uint256',
                                    'typeString': 'uint256'
                                  }
                                },
                                'id': 395,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'memberName': 'add',
                                'nodeType': 'MemberAccess',
                                'referencedDeclaration': 863,
                                'src': '7637:15:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                                  'typeString': 'function (uint256,uint256) pure returns (uint256)'
                                }
                              },
                              'id': 397,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'functionCall',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '7637:25:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            },
                            'src': '7624:38:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bool',
                              'typeString': 'bool'
                            }
                          },
                          'src': '7497:165:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '&&',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 405,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 400,
                            'name': 'balance',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 371,
                            'src': '7678:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '>=',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'id': 403,
                                'name': 'gasPrice',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 330,
                                'src': '7705:8:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              ],
                              'expression': {
                                'argumentTypes': null,
                                'id': 401,
                                'name': 'tokenAmount',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 326,
                                'src': '7689:11:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'id': 402,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'add',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': 863,
                              'src': '7689:15:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                                'typeString': 'function (uint256,uint256) pure returns (uint256)'
                              }
                            },
                            'id': 404,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'kind': 'functionCall',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '7689:25:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '7678:36:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '7497:217:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'id': 407,
                    'isConstant': false,
                    'isInlineArray': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'nodeType': 'TupleExpression',
                    'src': '7483:241:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 338,
                  'id': 408,
                  'nodeType': 'Return',
                  'src': '7476:248:1'
                }
              ]
            },
            'documentation': null,
            'id': 410,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'isSubscriptionReady',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 335,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 320,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6508:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 319,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6508:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 322,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6547:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 321,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6547:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 324,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6583:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 323,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6583:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 326,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6655:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 325,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6655:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 328,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6725:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 327,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6725:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 330,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6797:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 329,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6797:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 332,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6882:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 331,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6882:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 334,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '6964:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 333,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6964:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '6498:544:1'
            },
            'returnParameters': {
              'id': 338,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 337,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 410,
                  'src': '7088:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 336,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '7088:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '7087:6:1'
            },
            'scope': 675,
            'src': '6470:1261:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 486,
              'nodeType': 'Block',
              'src': '8606:802:1',
              'statements': [
                {
                  'assignments': [
                    432
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 432,
                      'name': 'subscriptionHash',
                      'nodeType': 'VariableDeclaration',
                      'scope': 486,
                      'src': '8616:24:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bytes32',
                        'typeString': 'bytes32'
                      },
                      'typeName': {
                        'id': 431,
                        'name': 'bytes32',
                        'nodeType': 'ElementaryTypeName',
                        'src': '8616:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 442,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 434,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 412,
                        'src': '8676:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 435,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 414,
                        'src': '8682:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 436,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 416,
                        'src': '8686:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 437,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 418,
                        'src': '8700:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 438,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 420,
                        'src': '8713:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 439,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 422,
                        'src': '8728:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 440,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 424,
                        'src': '8738:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 433,
                      'name': 'getSubscriptionHash',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 301,
                      'src': '8643:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bytes32_$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256) view returns (bytes32)'
                      }
                    },
                    'id': 441,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '8643:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '8616:137:1'
                },
                {
                  'assignments': [
                    444
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 444,
                      'name': 'signer',
                      'nodeType': 'VariableDeclaration',
                      'scope': 486,
                      'src': '8763:14:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      },
                      'typeName': {
                        'id': 443,
                        'name': 'address',
                        'nodeType': 'ElementaryTypeName',
                        'src': '8763:7:1',
                        'stateMutability': 'nonpayable',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 449,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 446,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 432,
                        'src': '8802:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 447,
                        'name': 'signature',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 426,
                        'src': '8820:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        },
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'id': 445,
                      'name': 'getSubscriptionSigner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 318,
                      'src': '8780:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$',
                        'typeString': 'function (bytes32,bytes memory) pure returns (address)'
                      }
                    },
                    'id': 448,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '8780:50:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '8763:67:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        'id': 453,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 451,
                          'name': 'signer',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 444,
                          'src': '8887:6:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 452,
                          'name': 'from',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 412,
                          'src': '8897:4:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'src': '8887:14:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '496e76616c6964205369676e617475726520666f7220737562736372697074696f6e2063616e63656c6c6174696f6e',
                        'id': 454,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '8903:49:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_20f3baa67ddd296dfb8b9e0ec971696cfd8630a4bebb38617aeef0cee76fac0b',
                          'typeString': 'literal_string \'Invalid Signature for subscription cancellation\''
                        },
                        'value': 'Invalid Signature for subscription cancellation'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_20f3baa67ddd296dfb8b9e0ec971696cfd8630a4bebb38617aeef0cee76fac0b',
                          'typeString': 'literal_string \'Invalid Signature for subscription cancellation\''
                        }
                      ],
                      'id': 450,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '8879:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 455,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '8879:74:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 456,
                  'nodeType': 'ExpressionStatement',
                  'src': '8879:74:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        'id': 461,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 458,
                          'name': 'from',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 412,
                          'src': '9012:4:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 459,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1351,
                            'src': '9020:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 460,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '9020:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'src': '9012:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '6d73672e73656e646572206973206e6f74207468652073756273637269626572',
                        'id': 462,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '9032:34:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_b86252a974ff2529f3bb7d6f22659872d492e2e9d678b8652f19cecd6ad9fd79',
                          'typeString': 'literal_string \'msg.sender is not the subscriber\''
                        },
                        'value': 'msg.sender is not the subscriber'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_b86252a974ff2529f3bb7d6f22659872d492e2e9d678b8652f19cecd6ad9fd79',
                          'typeString': 'literal_string \'msg.sender is not the subscriber\''
                        }
                      ],
                      'id': 457,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '9004:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 463,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '9004:63:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 464,
                  'nodeType': 'ExpressionStatement',
                  'src': '9004:63:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 472,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 465,
                        'name': 'nextValidTimestamp',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 85,
                        'src': '9206:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                          'typeString': 'mapping(bytes32 => uint256)'
                        }
                      },
                      'id': 467,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 466,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 432,
                        'src': '9225:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'nodeType': 'IndexAccess',
                      'src': '9206:36:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 470,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'nodeType': 'UnaryOperation',
                          'operator': '-',
                          'prefix': true,
                          'src': '9251:2:1',
                          'subExpression': {
                            'argumentTypes': null,
                            'hexValue': '31',
                            'id': 469,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '9252:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_1_by_1',
                              'typeString': 'int_const 1'
                            },
                            'value': '1'
                          },
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        ],
                        'id': 468,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'lValueRequested': false,
                        'nodeType': 'ElementaryTypeNameExpression',
                        'src': '9243:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_type$_t_uint256_$',
                          'typeString': 'type(uint256)'
                        },
                        'typeName': 'uint256'
                      },
                      'id': 471,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'typeConversion',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '9243:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '9206:48:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 473,
                  'nodeType': 'ExpressionStatement',
                  'src': '9206:48:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 475,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 412,
                        'src': '9302:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 476,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 414,
                        'src': '9308:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 477,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 416,
                        'src': '9312:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 478,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 418,
                        'src': '9326:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 479,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 420,
                        'src': '9339:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 480,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 422,
                        'src': '9354:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 481,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 424,
                        'src': '9364:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 474,
                      'name': 'CancelSubscription',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 121,
                      'src': '9270:18:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256)'
                      }
                    },
                    'id': 482,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '9270:109:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 483,
                  'nodeType': 'EmitStatement',
                  'src': '9265:114:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'hexValue': '74727565',
                    'id': 484,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'bool',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '9397:4:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    },
                    'value': 'true'
                  },
                  'functionReturnParameters': 430,
                  'id': 485,
                  'nodeType': 'Return',
                  'src': '9390:11:1'
                }
              ]
            },
            'documentation': null,
            'id': 487,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'cancelSubscription',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 427,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 412,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8022:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 411,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8022:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 414,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8061:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 413,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8061:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 416,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8097:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 415,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8097:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 418,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8169:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 417,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8169:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 420,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8239:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 419,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8239:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 422,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8311:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 421,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8311:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 424,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8395:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 423,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8395:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 426,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8477:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 425,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8477:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '8012:543:1'
            },
            'returnParameters': {
              'id': 430,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 429,
                  'name': 'success',
                  'nodeType': 'VariableDeclaration',
                  'scope': 487,
                  'src': '8588:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 428,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8588:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '8587:14:1'
            },
            'scope': 675,
            'src': '7985:1423:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 636,
              'nodeType': 'Block',
              'src': '10189:2468:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        'id': 512,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 509,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1351,
                            'src': '10207:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 510,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '10207:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 511,
                          'name': 'relayer',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 71,
                          'src': '10221:7:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'src': '10207:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      ],
                      'id': 508,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1354,
                      'src': '10199:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$returns$__$',
                        'typeString': 'function (bool) pure'
                      }
                    },
                    'id': 513,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '10199:30:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 514,
                  'nodeType': 'ExpressionStatement',
                  'src': '10199:30:1'
                },
                {
                  'assignments': [
                    516
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 516,
                      'name': 'subscriptionHash',
                      'nodeType': 'VariableDeclaration',
                      'scope': 636,
                      'src': '10239:24:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bytes32',
                        'typeString': 'bytes32'
                      },
                      'typeName': {
                        'id': 515,
                        'name': 'bytes32',
                        'nodeType': 'ElementaryTypeName',
                        'src': '10239:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 526,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 518,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 489,
                        'src': '10299:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 519,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 491,
                        'src': '10305:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 520,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 493,
                        'src': '10309:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 521,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 495,
                        'src': '10323:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 522,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 497,
                        'src': '10336:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 523,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 499,
                        'src': '10351:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 524,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 501,
                        'src': '10361:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 517,
                      'name': 'getSubscriptionHash',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 301,
                      'src': '10266:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bytes32_$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256) view returns (bytes32)'
                      }
                    },
                    'id': 525,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '10266:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '10239:137:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 529,
                            'name': 'from',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 489,
                            'src': '10473:4:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 530,
                            'name': 'to',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 491,
                            'src': '10479:2:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 531,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 493,
                            'src': '10483:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 532,
                            'name': 'tokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 495,
                            'src': '10497:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 533,
                            'name': 'periodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 497,
                            'src': '10510:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 534,
                            'name': 'gasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 499,
                            'src': '10525:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 535,
                            'name': 'nonce',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 501,
                            'src': '10535:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 536,
                            'name': 'signature',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 503,
                            'src': '10542:9:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes_memory_ptr',
                              'typeString': 'bytes memory'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_bytes_memory_ptr',
                              'typeString': 'bytes memory'
                            }
                          ],
                          'id': 528,
                          'name': 'isSubscriptionReady',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 410,
                          'src': '10453:19:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bool_$',
                            'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256,bytes memory) view returns (bool)'
                          }
                        },
                        'id': 537,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '10453:99:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '537562736372697074696f6e206973206e6f74207265616479206f7220636f6e646974696f6e73206f66207472616e736374696f6e20617265206e6f74206d6574',
                        'id': 538,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '10554:67:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_af71f06446e1befab38ec272e173aae8220ce6336c1755fee67e531c43ea91d3',
                          'typeString': 'literal_string \'Subscription is not ready or conditions of transction are not met\''
                        },
                        'value': 'Subscription is not ready or conditions of transction are not met'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_af71f06446e1befab38ec272e173aae8220ce6336c1755fee67e531c43ea91d3',
                          'typeString': 'literal_string \'Subscription is not ready or conditions of transction are not met\''
                        }
                      ],
                      'id': 527,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '10444:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 539,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '10444:179:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 540,
                  'nodeType': 'ExpressionStatement',
                  'src': '10444:179:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 549,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 541,
                        'name': 'nextValidTimestamp',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 85,
                        'src': '10713:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                          'typeString': 'mapping(bytes32 => uint256)'
                        }
                      },
                      'id': 543,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 542,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 516,
                        'src': '10732:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'nodeType': 'IndexAccess',
                      'src': '10713:36:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 547,
                          'name': 'periodSeconds',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 497,
                          'src': '10772:13:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        ],
                        'expression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 544,
                            'name': 'block',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1341,
                            'src': '10752:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_block',
                              'typeString': 'block'
                            }
                          },
                          'id': 545,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'timestamp',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '10752:15:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 546,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'add',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': 863,
                        'src': '10752:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                          'typeString': 'function (uint256,uint256) pure returns (uint256)'
                        }
                      },
                      'id': 548,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'functionCall',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '10752:34:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '10713:73:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 550,
                  'nodeType': 'ExpressionStatement',
                  'src': '10713:73:1'
                },
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 555,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 551,
                      'name': 'nonce',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 501,
                      'src': '10905:5:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '>',
                    'rightExpression': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 552,
                        'name': 'extraNonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 89,
                        'src': '10913:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                          'typeString': 'mapping(address => uint256)'
                        }
                      },
                      'id': 554,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 553,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 489,
                        'src': '10924:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'nodeType': 'IndexAccess',
                      'src': '10913:16:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '10905:24:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 563,
                  'nodeType': 'IfStatement',
                  'src': '10902:75:1',
                  'trueBody': {
                    'id': 562,
                    'nodeType': 'Block',
                    'src': '10930:47:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'id': 560,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftHandSide': {
                            'argumentTypes': null,
                            'baseExpression': {
                              'argumentTypes': null,
                              'id': 556,
                              'name': 'extraNonce',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 89,
                              'src': '10942:10:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                                'typeString': 'mapping(address => uint256)'
                              }
                            },
                            'id': 558,
                            'indexExpression': {
                              'argumentTypes': null,
                              'id': 557,
                              'name': 'from',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 489,
                              'src': '10953:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            },
                            'isConstant': false,
                            'isLValue': true,
                            'isPure': false,
                            'lValueRequested': true,
                            'nodeType': 'IndexAccess',
                            'src': '10942:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'Assignment',
                          'operator': '=',
                          'rightHandSide': {
                            'argumentTypes': null,
                            'id': 559,
                            'name': 'nonce',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 501,
                            'src': '10961:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '10942:24:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 561,
                        'nodeType': 'ExpressionStatement',
                        'src': '10942:24:1'
                      }
                    ]
                  }
                },
                {
                  'assignments': [
                    565
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 565,
                      'name': 'startingBalance',
                      'nodeType': 'VariableDeclaration',
                      'scope': 636,
                      'src': '11062:23:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 564,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '11062:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 572,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 570,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 491,
                        'src': '11118:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 567,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 493,
                            'src': '11094:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 566,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1267,
                          'src': '11088:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1267_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 568,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '11088:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1267',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 569,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'balanceOf',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 925,
                      'src': '11088:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_view$_t_address_$returns$_t_uint256_$',
                        'typeString': 'function (address) view external returns (uint256)'
                      }
                    },
                    'id': 571,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11088:33:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '11062:59:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 577,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 489,
                        'src': '11164:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 578,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 491,
                        'src': '11169:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 579,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 495,
                        'src': '11172:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 574,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 493,
                            'src': '11137:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 573,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1267,
                          'src': '11131:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1267_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 575,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '11131:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1267',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 576,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'transferFrom',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1014,
                      'src': '11131:32:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$',
                        'typeString': 'function (address,address,uint256) external returns (bool)'
                      }
                    },
                    'id': 580,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11131:53:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'id': 581,
                  'nodeType': 'ExpressionStatement',
                  'src': '11131:53:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 593,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'components': [
                            {
                              'argumentTypes': null,
                              'commonType': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              },
                              'id': 585,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'leftExpression': {
                                'argumentTypes': null,
                                'id': 583,
                                'name': 'startingBalance',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 565,
                                'src': '11214:15:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'nodeType': 'BinaryOperation',
                              'operator': '+',
                              'rightExpression': {
                                'argumentTypes': null,
                                'id': 584,
                                'name': 'tokenAmount',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 495,
                                'src': '11230:11:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'src': '11214:27:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            }
                          ],
                          'id': 586,
                          'isConstant': false,
                          'isInlineArray': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'nodeType': 'TupleExpression',
                          'src': '11213:29:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 591,
                              'name': 'to',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 491,
                              'src': '11276:2:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            ],
                            'expression': {
                              'argumentTypes': null,
                              'arguments': [
                                {
                                  'argumentTypes': null,
                                  'id': 588,
                                  'name': 'tokenAddress',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 493,
                                  'src': '11252:12:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                }
                              ],
                              'expression': {
                                'argumentTypes': [
                                  {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                ],
                                'id': 587,
                                'name': 'ERC20',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1267,
                                'src': '11246:5:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_type$_t_contract$_ERC20_$1267_$',
                                  'typeString': 'type(contract ERC20)'
                                }
                              },
                              'id': 589,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'typeConversion',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '11246:19:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_contract$_ERC20_$1267',
                                'typeString': 'contract ERC20'
                              }
                            },
                            'id': 590,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'memberName': 'balanceOf',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 925,
                            'src': '11246:29:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_external_view$_t_address_$returns$_t_uint256_$',
                              'typeString': 'function (address) view external returns (uint256)'
                            }
                          },
                          'id': 592,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '11246:33:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'src': '11213:66:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '45524332302042616c616e636520646964206e6f74206368616e676520636f72726563746c79',
                        'id': 594,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '11291:40:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_ded71a89e8fc5dbd375e97b6164c08c2ea5d981bb8fdce6588c0434f53d059b7',
                          'typeString': 'literal_string \'ERC20 Balance did not change correctly\''
                        },
                        'value': 'ERC20 Balance did not change correctly'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_ded71a89e8fc5dbd375e97b6164c08c2ea5d981bb8fdce6588c0434f53d059b7',
                          'typeString': 'literal_string \'ERC20 Balance did not change correctly\''
                        }
                      ],
                      'id': 582,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '11194:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 595,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11194:147:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 596,
                  'nodeType': 'ExpressionStatement',
                  'src': '11194:147:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'id': 598,
                          'name': 'checkSuccess',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 652,
                          'src': '11371:12:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_pure$__$returns$_t_bool_$',
                            'typeString': 'function () pure returns (bool)'
                          }
                        },
                        'id': 599,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '11371:14:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '537562736372697074696f6e3a3a65786563757465537562736372697074696f6e205472616e7366657246726f6d206661696c6564',
                        'id': 600,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '11397:55:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_22fda53c4160a201b6c6b94643fa6d7525aa15a7f4ec1af5c52f0db455252a28',
                          'typeString': 'literal_string \'Subscription::executeSubscription TransferFrom failed\''
                        },
                        'value': 'Subscription::executeSubscription TransferFrom failed'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_22fda53c4160a201b6c6b94643fa6d7525aa15a7f4ec1af5c52f0db455252a28',
                          'typeString': 'literal_string \'Subscription::executeSubscription TransferFrom failed\''
                        }
                      ],
                      'id': 597,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1355,
                      'src': '11352:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 601,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11352:112:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 602,
                  'nodeType': 'ExpressionStatement',
                  'src': '11352:112:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 604,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 489,
                        'src': '11514:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 605,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 491,
                        'src': '11520:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 606,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 493,
                        'src': '11524:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 607,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 495,
                        'src': '11538:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 608,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 497,
                        'src': '11551:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 609,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 499,
                        'src': '11566:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 610,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 501,
                        'src': '11576:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 603,
                      'name': 'ExecuteSubscription',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 105,
                      'src': '11481:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256)'
                      }
                    },
                    'id': 611,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11481:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 612,
                  'nodeType': 'EmitStatement',
                  'src': '11476:115:1'
                },
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 615,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 613,
                      'name': 'gasPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 499,
                      'src': '11811:8:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '>',
                    'rightExpression': {
                      'argumentTypes': null,
                      'hexValue': '30',
                      'id': 614,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '11822:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_0_by_1',
                        'typeString': 'int_const 0'
                      },
                      'value': '0'
                    },
                    'src': '11811:12:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 633,
                  'nodeType': 'IfStatement',
                  'src': '11807:822:1',
                  'trueBody': {
                    'id': 632,
                    'nodeType': 'Block',
                    'src': '11825:804:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 620,
                              'name': 'from',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 489,
                              'src': '12437:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            },
                            {
                              'argumentTypes': null,
                              'expression': {
                                'argumentTypes': null,
                                'id': 621,
                                'name': 'msg',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1351,
                                'src': '12443:3:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_magic_message',
                                  'typeString': 'msg'
                                }
                              },
                              'id': 622,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'sender',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': null,
                              'src': '12443:10:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address_payable',
                                'typeString': 'address payable'
                              }
                            },
                            {
                              'argumentTypes': null,
                              'id': 623,
                              'name': 'gasPrice',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 499,
                              'src': '12455:8:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              },
                              {
                                'typeIdentifier': 't_address_payable',
                                'typeString': 'address payable'
                              },
                              {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            ],
                            'expression': {
                              'argumentTypes': null,
                              'arguments': [
                                {
                                  'argumentTypes': null,
                                  'id': 617,
                                  'name': 'tokenAddress',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 493,
                                  'src': '12410:12:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                }
                              ],
                              'expression': {
                                'argumentTypes': [
                                  {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                ],
                                'id': 616,
                                'name': 'ERC20',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1267,
                                'src': '12404:5:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_type$_t_contract$_ERC20_$1267_$',
                                  'typeString': 'type(contract ERC20)'
                                }
                              },
                              'id': 618,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'typeConversion',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '12404:19:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_contract$_ERC20_$1267',
                                'typeString': 'contract ERC20'
                              }
                            },
                            'id': 619,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'memberName': 'transferFrom',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 1014,
                            'src': '12404:32:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$',
                              'typeString': 'function (address,address,uint256) external returns (bool)'
                            }
                          },
                          'id': 624,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '12404:60:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'id': 625,
                        'nodeType': 'ExpressionStatement',
                        'src': '12404:60:1'
                      },
                      {
                        'expression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'arguments': [],
                              'expression': {
                                'argumentTypes': [],
                                'id': 627,
                                'name': 'checkSuccess',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 652,
                                'src': '12503:12:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_function_internal_pure$__$returns$_t_bool_$',
                                  'typeString': 'function () pure returns (bool)'
                                }
                              },
                              'id': 628,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'functionCall',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '12503:14:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              }
                            },
                            {
                              'argumentTypes': null,
                              'hexValue': '537562736372697074696f6e3a3a65786563757465537562736372697074696f6e204661696c656420746f20706179206761732061732066726f6d206163636f756e74',
                              'id': 629,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'kind': 'string',
                              'lValueRequested': false,
                              'nodeType': 'Literal',
                              'src': '12535:69:1',
                              'subdenomination': null,
                              'typeDescriptions': {
                                'typeIdentifier': 't_stringliteral_91dfd8b130e56d88b0bb875283dbd7a93ad5846177fd31c98ad56f2a5bd9d2f7',
                                'typeString': 'literal_string \'Subscription::executeSubscription Failed to pay gas as from account\''
                              },
                              'value': 'Subscription::executeSubscription Failed to pay gas as from account'
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              },
                              {
                                'typeIdentifier': 't_stringliteral_91dfd8b130e56d88b0bb875283dbd7a93ad5846177fd31c98ad56f2a5bd9d2f7',
                                'typeString': 'literal_string \'Subscription::executeSubscription Failed to pay gas as from account\''
                              }
                            ],
                            'id': 626,
                            'name': 'require',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [
                              1354,
                              1355
                            ],
                            'referencedDeclaration': 1355,
                            'src': '12478:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                              'typeString': 'function (bool,string memory) pure'
                            }
                          },
                          'id': 630,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '12478:140:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_tuple$__$',
                            'typeString': 'tuple()'
                          }
                        },
                        'id': 631,
                        'nodeType': 'ExpressionStatement',
                        'src': '12478:140:1'
                      }
                    ]
                  }
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'hexValue': '74727565',
                    'id': 634,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'bool',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '12646:4:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    },
                    'value': 'true'
                  },
                  'functionReturnParameters': 507,
                  'id': 635,
                  'nodeType': 'Return',
                  'src': '12639:11:1'
                }
              ]
            },
            'documentation': null,
            'id': 637,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'executeSubscription',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 504,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 489,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9604:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 488,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9604:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 491,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9643:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 490,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9643:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 493,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9679:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 492,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9679:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 495,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9751:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 494,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9751:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 497,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9821:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 496,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9821:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 499,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9893:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 498,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9893:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 501,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '9977:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 500,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9977:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 503,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '10060:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 502,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10060:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '9594:544:1'
            },
            'returnParameters': {
              'id': 507,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 506,
                  'name': 'success',
                  'nodeType': 'VariableDeclaration',
                  'scope': 637,
                  'src': '10171:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 505,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10171:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '10170:14:1'
            },
            'scope': 675,
            'src': '9566:3091:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 651,
              'nodeType': 'Block',
              'src': '13157:770:1',
              'statements': [
                {
                  'assignments': [
                    643
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 643,
                      'name': 'returnValue',
                      'nodeType': 'VariableDeclaration',
                      'scope': 651,
                      'src': '13167:19:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 642,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '13167:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 645,
                  'initialValue': {
                    'argumentTypes': null,
                    'hexValue': '30',
                    'id': 644,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'number',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '13189:1:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_rational_0_by_1',
                      'typeString': 'int_const 0'
                    },
                    'value': '0'
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '13167:23:1'
                },
                {
                  'externalReferences': [
                    {
                      'returnValue': {
                        'declaration': 643,
                        'isOffset': false,
                        'isSlot': false,
                        'src': '13472:11:1',
                        'valueSize': 1
                      }
                    },
                    {
                      'returnValue': {
                        'declaration': 643,
                        'isOffset': false,
                        'isSlot': false,
                        'src': '13749:11:1',
                        'valueSize': 1
                      }
                    }
                  ],
                  'id': 646,
                  'nodeType': 'InlineAssembly',
                  'operations': '{\n    switch returndatasize()\n    case 0x0 {\n        returnValue := 1\n    }\n    case 0x20 {\n        returndatacopy(0x0, 0x0, 0x20)\n        returnValue := mload(0x0)\n    }\n    default {\n    }\n}',
                  'src': '13268:635:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 649,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 647,
                      'name': 'returnValue',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 643,
                      'src': '13904:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '!=',
                    'rightExpression': {
                      'argumentTypes': null,
                      'hexValue': '30',
                      'id': 648,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '13919:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_0_by_1',
                        'typeString': 'int_const 0'
                      },
                      'value': '0'
                    },
                    'src': '13904:16:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 641,
                  'id': 650,
                  'nodeType': 'Return',
                  'src': '13897:23:1'
                }
              ]
            },
            'documentation': 'Checks the return value of the previous function. Returns true if the previous function\nfunction returned 32 non-zero bytes or returned zero bytes.',
            'id': 652,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'checkSuccess',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 638,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '13093:7:1'
            },
            'returnParameters': {
              'id': 641,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 640,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 652,
                  'src': '13147:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 639,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '13147:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '13146:6:1'
            },
            'scope': 675,
            'src': '13072:855:1',
            'stateMutability': 'pure',
            'superFunction': null,
            'visibility': 'private'
          },
          {
            'body': {
              'id': 666,
              'nodeType': 'Block',
              'src': '14101:70:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        'id': 659,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 656,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1351,
                            'src': '14117:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 657,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '14117:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 658,
                          'name': 'author',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 69,
                          'src': '14129:6:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'src': '14117:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      ],
                      'id': 655,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1354,
                        1355
                      ],
                      'referencedDeclaration': 1354,
                      'src': '14109:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$returns$__$',
                        'typeString': 'function (bool) pure'
                      }
                    },
                    'id': 660,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '14109:27:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 661,
                  'nodeType': 'ExpressionStatement',
                  'src': '14109:27:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 663,
                        'name': 'author',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 69,
                        'src': '14157:6:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      ],
                      'id': 662,
                      'name': 'selfdestruct',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 1359,
                      'src': '14144:12:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_selfdestruct_nonpayable$_t_address_payable_$returns$__$',
                        'typeString': 'function (address payable)'
                      }
                    },
                    'id': 664,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '14144:20:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 665,
                  'nodeType': 'ExpressionStatement',
                  'src': '14144:20:1'
                }
              ]
            },
            'documentation': null,
            'id': 667,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'endContract',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 653,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14077:2:1'
            },
            'returnParameters': {
              'id': 654,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14101:0:1'
            },
            'scope': 675,
            'src': '14057:114:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'external'
          },
          {
            'body': {
              'id': 673,
              'nodeType': 'Block',
              'src': '14277:25:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [],
                    'expression': {
                      'argumentTypes': [],
                      'id': 670,
                      'name': 'revert',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1356,
                        1357
                      ],
                      'referencedDeclaration': 1356,
                      'src': '14286:6:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_revert_pure$__$returns$__$',
                        'typeString': 'function () pure'
                      }
                    },
                    'id': 671,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '14286:9:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 672,
                  'nodeType': 'ExpressionStatement',
                  'src': '14286:9:1'
                }
              ]
            },
            'documentation': null,
            'id': 674,
            'implemented': true,
            'kind': 'fallback',
            'modifiers': [],
            'name': '',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 668,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14257:2:1'
            },
            'returnParameters': {
              'id': 669,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14277:0:1'
            },
            'scope': 675,
            'src': '14248:54:1',
            'stateMutability': 'payable',
            'superFunction': null,
            'visibility': 'external'
          }
        ],
        'scope': 676,
        'src': '1091:13213:1'
      }
    ],
    'src': '0:14305:1'
  },
  'compiler': {
    'name': 'solc',
    'version': '0.5.2+commit.1df8f40c.Emscripten.clang'
  },
  'networks': {},
  'schemaVersion': '3.0.6',
  'updatedAt': '2019-05-12T15:53:10.470Z',
  'devdoc': {
    'methods': {}
  },
  'userdoc': {
    'methods': {}
  }
};
