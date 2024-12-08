import devices from "../data/devices";
import Device from "../data/models/Device";
import { v4 as uuidv4 } from "uuid";

export const getAllDevice = async (ownerEmail: string) => {
  const allDevice = await devices.getAllDevice();
  const parseDevice = !!allDevice
    ? Object.keys(allDevice).map((deviceId) => allDevice[deviceId])
    : [];

  const result = parseDevice.filter(
    (device) => device.ownerEmail === ownerEmail
  );
  return result;
};

export const addDevice = async (device: Device) => {
  const deviceWithId = {
    ...device,
    id: uuidv4()
  };
  await devices.addDevice(deviceWithId);
  return deviceWithId;
};

export const deleteDevice = async (deviceId: string) =>
  devices.deleteDevice(deviceId);

export const updateDeviceDescription = async (
  deviceId: string,
  description: string
) => devices.updateDevice(deviceId, { description });

export const updateDeviceStatus = async (deviceId: string, isOn = false) =>
  devices.updateDevice(deviceId, { isOn });

export default {
  getAllDevice,
  addDevice,
  deleteDevice,
  updateDeviceDescription,
  updateDeviceStatus
};
