import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {HttpSerProvider} from "../../providers/http-service/http-service";
import {NavController} from'ionic-angular';
import {NewtaskdetailPage} from "../newtaskdetail/newtaskdetail";
import {PersonHomeDetailPage} from "../person-home-detail/person-home-detail";
import {PersondetailPage} from "../persondetail/persondetail";
import {PoundlistPage} from "../poundlist/poundlist";

@Component({
  templateUrl: 'scheduiling-plan.html'
})
export class ScheduilingPlanPage {

  pet: string = "task";
  isAndroid: boolean = false;
  a: any ;
  factoryname:any;
  time:any;
  master:any;
  check:any;
  pp:any;
  code:any;
  carcode:any;
  time2:any;
  amount:any;
  name;any;
  address:any;
  b:any;
  arr:any;
  day:any;
  factory:any;
  fuck:any={
    "code": 0,
    "data": [
      {
        "vbillcode": "DN2018082200000030",
        "factoryname": null,
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "20",
        "vvehiclename": "沪B23333",
        "carhanger": "沪A10086",
        "vdef18": "~",
        "masterdrivercode": null,
        "masterdriver": null,
        "copilotcode": null,
        "copilot": null,
        "username": "yonyou01",
        "mobile": null,
        "cdeliveryid": "1001A910000000002EFK",
        "vdef16": "N",
        "vdef17": null,
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.001",
            "customername": "上海振信气体有限公司",
            "nastnum": "20",
            "detailinfo": null,
            "vbdef16": "~",
            "frownote": null,
            "cdeliveryid": "1001A910000000002EFK",
            "cdeliverybid": "1001A910000000002EFL",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018082200000028",
        "factoryname": null,
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "12",
        "vvehiclename": "沪B23333",
        "carhanger": "沪B10010",
        "vdef18": "~",
        "masterdrivercode": null,
        "masterdriver": null,
        "copilotcode": null,
        "copilot": null,
        "username": "yonyou06",
        "mobile": null,
        "cdeliveryid": "10016A10000000002FZK",
        "vdef16": "N",
        "vdef17": null,
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.001",
            "customername": "上海振信气体有限公司",
            "nastnum": "12",
            "detailinfo": null,
            "vbdef16": "~",
            "frownote": null,
            "cdeliveryid": "10016A10000000002FZK",
            "cdeliverybid": "10016A10000000002FZL",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018082100000020",
        "factoryname": null,
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "2",
        "vvehiclename": "沪B23333",
        "carhanger": "沪B10010",
        "vdef18": "~",
        "masterdrivercode": null,
        "masterdriver": null,
        "copilotcode": null,
        "copilot": null,
        "username": "yonyou06",
        "mobile": null,
        "cdeliveryid": "1001AA10000000001V7H",
        "vdef16": "N",
        "vdef17": "3",
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.001",
            "customername": "上海振信气体有限公司",
            "nastnum": "2",
            "detailinfo": null,
            "vbdef16": "~",
            "frownote": null,
            "cdeliveryid": "1001AA10000000001V7H",
            "cdeliverybid": "1001AA10000000001V7I",
            "vchangerate": "1.00/1.00",
            "vbdef15": "3"
          }
        ]
      },
      {
        "vbillcode": "DN2018090400000046",
        "factoryname": "张家港盈鼎气体有限公司",
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "20",
        "vvehiclename": "沪A10086",
        "carhanger": "沪B10010",
        "vdef18": "2018-09-04 10:47:43",
        "masterdrivercode": "A0001",
        "masterdriver": "测试司机",
        "copilotcode": "A0002",
        "copilot": "测试司机1",
        "username": "yonyou05",
        "mobile": null,
        "cdeliveryid": "1001CS10000000004SVC",
        "vdef16": "N",
        "vdef17": null,
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.001",
            "customername": "上海振信气体有限公司",
            "nastnum": "20",
            "detailinfo": null,
            "vbdef16": "~",
            "frownote": "nihao",
            "cdeliveryid": "1001CS10000000004SVC",
            "cdeliverybid": "1001CS10000000004SVD",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018081600000007",
        "factoryname": "常熟盈德气体有限公司",
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "25",
        "vvehiclename": "沪B23333",
        "carhanger": "沪B10010",
        "vdef18": "2018-08-15 17:05:09",
        "masterdrivercode": null,
        "masterdriver": null,
        "copilotcode": null,
        "copilot": null,
        "username": "yonyou02",
        "mobile": null,
        "cdeliveryid": "1001AA100000000011UJ",
        "vdef16": "Y",
        "vdef17": "4",
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.001",
            "customername": "上海振信气体有限公司",
            "nastnum": "10",
            "detailinfo": null,
            "vbdef16": "2018-08-16 09:00:00",
            "frownote": null,
            "cdeliveryid": "1001AA100000000011UJ",
            "cdeliverybid": "1001AA100000000011UK",
            "vchangerate": "1.00/1.00",
            "vbdef15": "3"
          },
          {
            "customercode": "02.01.007",
            "customername": "上海振信盖斯实业有限公司",
            "nastnum": "10",
            "detailinfo": null,
            "vbdef16": "2018-08-16 10:00:00",
            "frownote": null,
            "cdeliveryid": "1001AA100000000011UJ",
            "cdeliverybid": "1001AA100000000011UL",
            "vchangerate": "1.00/1.00",
            "vbdef15": "3"
          },
          {
            "customercode": "02.01.002",
            "customername": "上海共同化工设备有限公司",
            "nastnum": "5",
            "detailinfo": null,
            "vbdef16": "2018-08-16 09:00:00",
            "frownote": null,
            "cdeliveryid": "1001AA100000000011UJ",
            "cdeliverybid": "1001AA100000000011UM",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018082200000024",
        "factoryname": null,
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "20",
        "vvehiclename": "沪B23333",
        "carhanger": "沪B10010",
        "vdef18": "~",
        "masterdrivercode": null,
        "masterdriver": null,
        "copilotcode": null,
        "copilot": null,
        "username": "yonyou06",
        "mobile": null,
        "cdeliveryid": "1001ZZ100000000024EG",
        "vdef16": "N",
        "vdef17": null,
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.001",
            "customername": "上海振信气体有限公司",
            "nastnum": "20",
            "detailinfo": null,
            "vbdef16": "~",
            "frownote": null,
            "cdeliveryid": "1001ZZ100000000024EG",
            "cdeliverybid": "1001ZZ100000000024EH",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018090400000050",
        "factoryname": "安阳盈德气体有限公司",
        "materialcode": "08",
        "materialname": "液氩",
        "nastnum": "20",
        "vvehiclename": "沪A10086",
        "carhanger": "沪A10086",
        "vdef18": "2018-09-04 13:12:44",
        "masterdrivercode": "A0001",
        "masterdriver": "测试司机",
        "copilotcode": "A0002",
        "copilot": "测试司机1",
        "username": "yonyou05",
        "mobile": null,
        "cdeliveryid": "1001CS10000000004WPC",
        "vdef16": "Y",
        "vdef17": "3",
        "deliveryDetailDtos": [
          {
            "customercode": "02330002",
            "customername": "浙江卫星能源有限公司",
            "nastnum": "20",
            "detailinfo": "浙江省XX市XX路10086号",
            "vbdef16": "~",
            "frownote": null,
            "cdeliveryid": "1001CS10000000004WPC",
            "cdeliverybid": "1001CS10000000004WPD",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018081500000006",
        "factoryname": "常熟盈德气体有限公司",
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "20",
        "vvehiclename": null,
        "carhanger": "沪B10010",
        "vdef18": "2018-08-18 00:00:00",
        "masterdrivercode": null,
        "masterdriver": null,
        "copilotcode": null,
        "copilot": null,
        "username": "yonyou02",
        "mobile": null,
        "cdeliveryid": "1001AA10000000000R5T",
        "vdef16": "~",
        "vdef17": null,
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.001",
            "customername": "上海振信气体有限公司",
            "nastnum": "20",
            "detailinfo": null,
            "vbdef16": "2018-08-16 00:00:00",
            "frownote": null,
            "cdeliveryid": "1001AA10000000000R5T",
            "cdeliverybid": "1001AA10000000000R5U",
            "vchangerate": "1.00/1.00",
            "vbdef15": "3"
          }
        ]
      },
      {
        "vbillcode": "DN2018082000000013",
        "factoryname": null,
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "2",
        "vvehiclename": "沪B23333",
        "carhanger": "沪B10010",
        "vdef18": "~",
        "masterdrivercode": "99",
        "masterdriver": "CS",
        "copilotcode": null,
        "copilot": null,
        "username": "yonyou06",
        "mobile": "13607336866",
        "cdeliveryid": "1001AA10000000001FUN",
        "vdef16": "Y",
        "vdef17": "0",
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.001",
            "customername": "上海振信气体有限公司",
            "nastnum": "2",
            "detailinfo": null,
            "vbdef16": "~",
            "frownote": null,
            "cdeliveryid": "1001AA10000000001FUN",
            "cdeliverybid": "1001AA10000000001FUO",
            "vchangerate": "1.00/1.00",
            "vbdef15": "3"
          }
        ]
      },
      {
        "vbillcode": "DN2018082900000040",
        "factoryname": "江苏盈德气体有限公司上海分公司",
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "40",
        "vvehiclename": "沪A10086",
        "carhanger": "沪A10086",
        "vdef18": "2018-08-29 14:58:33",
        "masterdrivercode": "A0001",
        "masterdriver": "测试司机",
        "copilotcode": "A0002",
        "copilot": "测试司机1",
        "username": "yonyou05",
        "mobile": null,
        "cdeliveryid": "1001CS100000000041JT",
        "vdef16": "N",
        "vdef17": null,
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.007",
            "customername": "上海振信盖斯实业有限公司",
            "nastnum": "40",
            "detailinfo": null,
            "vbdef16": "2018-08-29 14:58:38",
            "frownote": null,
            "cdeliveryid": "1001CS100000000041JT",
            "cdeliverybid": "1001CS100000000041JU",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018090400000051",
        "factoryname": "张家港盈鼎气体有限公司",
        "materialcode": "08",
        "materialname": "液氩",
        "nastnum": "15",
        "vvehiclename": "沪A10086",
        "carhanger": "沪A10086",
        "vdef18": "2018-09-04 14:10:53",
        "masterdrivercode": "A0001",
        "masterdriver": "测试司机",
        "copilotcode": "A0002",
        "copilot": "测试司机1",
        "username": "yonyou05",
        "mobile": null,
        "cdeliveryid": "1001CS10000000004Z0M",
        "vdef16": "Y",
        "vdef17": "3",
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.001",
            "customername": "上海振信气体有限公司",
            "nastnum": "10",
            "detailinfo": null,
            "vbdef16": "~",
            "frownote": "nihao",
            "cdeliveryid": "1001CS10000000004Z0M",
            "cdeliverybid": "1001CS10000000004Z0N",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          },
          {
            "customercode": "02330002",
            "customername": "浙江卫星能源有限公司",
            "nastnum": "5",
            "detailinfo": "浙江省XX市XX路10086号",
            "vbdef16": "~",
            "frownote": null,
            "cdeliveryid": "1001CS10000000004Z0M",
            "cdeliverybid": "1001CS10000000004Z0O",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018083100000044",
        "factoryname": "江苏盈德气体有限公司上海分公司",
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "22",
        "vvehiclename": "沪A10086",
        "carhanger": "沪A10086",
        "vdef18": "2018-09-01 16:38:43",
        "masterdrivercode": "A0001",
        "masterdriver": "测试司机",
        "copilotcode": "A0002",
        "copilot": "测试司机1",
        "username": "田力",
        "mobile": null,
        "cdeliveryid": "1001CS10000000004LWR",
        "vdef16": "N",
        "vdef17": null,
        "deliveryDetailDtos": [
          {
            "customercode": "02.03.005",
            "customername": "天津泰亨气体有限公司",
            "nastnum": "22",
            "detailinfo": "12121212",
            "vbdef16": "~",
            "frownote": null,
            "cdeliveryid": "1001CS10000000004LWR",
            "cdeliverybid": "1001CS10000000004LWS",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018082200000021",
        "factoryname": null,
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "20",
        "vvehiclename": "沪B23333",
        "carhanger": "沪A10086",
        "vdef18": "~",
        "masterdrivercode": null,
        "masterdriver": null,
        "copilotcode": null,
        "copilot": null,
        "username": "yonyou03",
        "mobile": null,
        "cdeliveryid": "1001CS10000000001RL8",
        "vdef16": "N",
        "vdef17": null,
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.001",
            "customername": "上海振信气体有限公司",
            "nastnum": "20",
            "detailinfo": null,
            "vbdef16": "~",
            "frownote": null,
            "cdeliveryid": "1001CS10000000001RL8",
            "cdeliverybid": "1001CS10000000001RL9",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018083100000041",
        "factoryname": "张家港盈达气体有限公司",
        "materialcode": "05",
        "materialname": "液氮",
        "nastnum": "25",
        "vvehiclename": "苏BX6776",
        "carhanger": "沪A10086",
        "vdef18": "2018-08-30 05:11:04",
        "masterdrivercode": "A0001",
        "masterdriver": "测试司机",
        "copilotcode": "A0002",
        "copilot": "测试司机1",
        "username": "郭柏杉",
        "mobile": null,
        "cdeliveryid": "1001CS10000000004GWD",
        "vdef16": "N",
        "vdef17": null,
        "deliveryDetailDtos": [
          {
            "customercode": "02330002",
            "customername": "浙江卫星能源有限公司",
            "nastnum": "25",
            "detailinfo": null,
            "vbdef16": "2018-08-30 23:37:30",
            "frownote": null,
            "cdeliveryid": "1001CS10000000004GWD",
            "cdeliverybid": "1001CS10000000004GWE",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018082000000015",
        "factoryname": "铜陵盈德气体有限公司",
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "25",
        "vvehiclename": "沪B23333",
        "carhanger": "沪A10086",
        "vdef18": "2018-08-21 10:00:00",
        "masterdrivercode": "A0001",
        "masterdriver": "测试司机",
        "copilotcode": "A0002",
        "copilot": "测试司机1",
        "username": "物流1",
        "mobile": null,
        "cdeliveryid": "1001CS10000000001IVE",
        "vdef16": "~",
        "vdef17": null,
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.010",
            "customername": "上海盖斯工业气体有限公司",
            "nastnum": "10",
            "detailinfo": null,
            "vbdef16": "2018-08-21 13:00:00",
            "frownote": null,
            "cdeliveryid": "1001CS10000000001IVE",
            "cdeliverybid": "1001CS10000000001IVF",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          },
          {
            "customercode": "02.01.013",
            "customername": "液化空气上海有限公司",
            "nastnum": "15",
            "detailinfo": null,
            "vbdef16": "2018-08-21 17:00:00",
            "frownote": null,
            "cdeliveryid": "1001CS10000000001IVE",
            "cdeliverybid": "1001CS10000000001IVG",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018083100000045",
        "factoryname": "铜陵盈德气体有限公司",
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "22",
        "vvehiclename": "苏H08927",
        "carhanger": "沪A10086",
        "vdef18": "2018-09-01 16:44:05",
        "masterdrivercode": "A0008",
        "masterdriver": "刘正权",
        "copilotcode": "A0009",
        "copilot": "徐中华",
        "username": "田力",
        "mobile": "15189643802",
        "cdeliveryid": "1001CS10000000004LX5",
        "vdef16": "N",
        "vdef17": null,
        "deliveryDetailDtos": [
          {
            "customercode": "02.03.046",
            "customername": "天津市合新创业商贸有限公司",
            "nastnum": "22",
            "detailinfo": "11111111111111111111",
            "vbdef16": "~",
            "frownote": null,
            "cdeliveryid": "1001CS10000000004LX5",
            "cdeliverybid": "1001CS10000000004LX6",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018082700000037",
        "factoryname": "铜陵盈德气体有限公司",
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "10",
        "vvehiclename": "沪A12345",
        "carhanger": "沪A10086",
        "vdef18": "~",
        "masterdrivercode": "A0001",
        "masterdriver": "测试司机",
        "copilotcode": "A0001",
        "copilot": "测试司机",
        "username": "yonyou05",
        "mobile": null,
        "cdeliveryid": "1001CS100000000035NW",
        "vdef16": "N",
        "vdef17": null,
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.001",
            "customername": "上海振信气体有限公司",
            "nastnum": "10",
            "detailinfo": null,
            "vbdef16": "2018-08-27 21:40:17",
            "frownote": null,
            "cdeliveryid": "1001CS100000000035NW",
            "cdeliverybid": "1001CS100000000035NX",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018081600000009",
        "factoryname": "常熟盈德气体有限公司",
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "30",
        "vvehiclename": "沪B23333",
        "carhanger": "沪B10010",
        "vdef18": "2018-08-15 17:05:09",
        "masterdrivercode": "A0001",
        "masterdriver": "测试司机",
        "copilotcode": null,
        "copilot": null,
        "username": "yonyou03",
        "mobile": "13511554759",
        "cdeliveryid": "1001CS100000000013CQ",
        "vdef16": "N",
        "vdef17": "3",
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.001",
            "customername": "上海振信气体有限公司",
            "nastnum": "15",
            "detailinfo": null,
            "vbdef16": "~",
            "frownote": null,
            "cdeliveryid": "1001CS100000000013CQ",
            "cdeliverybid": "1001CS100000000030RV",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          },
          {
            "customercode": "02.01.007",
            "customername": "上海振信盖斯实业有限公司",
            "nastnum": "10",
            "detailinfo": null,
            "vbdef16": "2018-08-16 10:00:00",
            "frownote": null,
            "cdeliveryid": "1001CS100000000013CQ",
            "cdeliverybid": "1001CS100000000013CS",
            "vchangerate": "1.00/1.00",
            "vbdef15": "3"
          },
          {
            "customercode": "02.01.002",
            "customername": "上海共同化工设备有限公司",
            "nastnum": "5",
            "detailinfo": null,
            "vbdef16": "2018-08-16 13:00:00",
            "frownote": null,
            "cdeliveryid": "1001CS100000000013CQ",
            "cdeliverybid": "1001CS100000000013CT",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      },
      {
        "vbillcode": "DN2018082700000036",
        "factoryname": "兰州盈德气体有限公司",
        "materialcode": "02",
        "materialname": "液氧",
        "nastnum": "15",
        "vvehiclename": "沪A12345",
        "carhanger": "沪A10086",
        "vdef18": "2018-08-28 16:13:59",
        "masterdrivercode": "A0001",
        "masterdriver": "测试司机",
        "copilotcode": "A0001",
        "copilot": "测试司机",
        "username": "yonyou03",
        "mobile": null,
        "cdeliveryid": "1001CS100000000035IW",
        "vdef16": "N",
        "vdef17": null,
        "deliveryDetailDtos": [
          {
            "customercode": "02.01.171",
            "customername": "测试客户1",
            "nastnum": "15",
            "detailinfo": "森兰路999号",
            "vbdef16": "2018-08-28 16:14:53",
            "frownote": null,
            "cdeliveryid": "1001CS100000000035IW",
            "cdeliverybid": "1001CS100000000035IX",
            "vchangerate": "1.00/1.00",
            "vbdef15": "~"
          }
        ]
      }
    ]
  }
  data:any;
  shabi:any;
  dashabi:any;
  Poundlist;

  constructor(public alertCtrl: AlertController,public req:HttpSerProvider,public navCtrl:NavController){
  this.Poundlist=PoundlistPage;

   /* godetail(){
      this.navCtrl.push(newtaskdetailPage);
    };*/
    // this.factory=this.factory.get('queryDelivery');

     this.data=this.fuck.data;
    //this.day=new Date();
    console.log(this.day,"dart")
    let that = this;
    // this.rec();
    let a={
      a:122222
    };

    // let  arr=[{a:1,b:2},{a:"a",b:"bv"}];
   // let factory=[{mn:"materialname",vc:"vvehiclename"}];
    // this.arr=arr;
    // console.log(a);
    // this.factoryname=this.factoryname.get('materialname');

    this.b=a.a;

    this.req.getnotloading('queryDelivery', {}).subscribe(function (ok) {
      let shabi =ok;
      this.dashabi=this.shabi.dashabi;



    }, function (err) {
    });

  }
  checkboxOnclick(name){
  let input =document.getElementById(name).checked;

    console.log(input,"aaa");
 // console.log(this.check)
  }
gotopoundlist(){


  this.navCtrl.push(PoundlistPage);

}
    // getjson(){
    //   return{
    //     a:1,b:2
    //   }
    // };
  /*rec(){
    let that=this;
    this.req.getnotloading('queryDelivery', {}).subscribe(function (ok) {
      let data = ok;


  /!* var json= {
      factoryname: 'factoryname', carcode: "carhanger", time: 'date', time2: 'date', master: 'aaa', pp: 'bbb'
   ,name:'customername',address:'xxx',amount:'2'}*!/
 /!*  that.factoryname=ok.factoryname;
   this.carcode=ok.carhanger;
   that.code=ok.vvehiclename;
   that.time=ok.time;
   that.time2=ok.time2;
   that.address=ok.address;
   that.amount=ok.amount;
   that.name=ok.name;
   that.master=ok.master;*!/

    }, function (err) {
    });
  }*/

     detail(){

    this.navCtrl.push(NewtaskdetailPage);
  }
  per(){
    this.navCtrl.push(PersondetailPage);
  }
  // constructor(public alertCtrl: AlertController) { }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: '接受任务',
      subTitle: '任务接收成功',
      buttons: ['OK']
    });
    alert.present();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: '确认接收任务',
      message: '您还有N个调度单未选中，是否确认接收任务。',
      buttons: [
        {
          text: '确认',
          handler: () => {
            console.log('agree clicked');
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('disAgree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


}

