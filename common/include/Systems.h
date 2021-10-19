#pragma once

#include <stdint.h>

typedef uint8_t SystemId;

const uint16_t PORT		= 0x2000;

const SystemId COMM_ID	= 0x00;
const SystemId CAN_ID	= 0x01;
const SystemId ARM_ID	= 0x02;
const SystemId ODRV_ID	= 0x03;
const SystemId CAM0_ID	= 0x04;
const SystemId CAM1_ID	= 0x05;
const SystemId AUTO_ID	= 0x06;

