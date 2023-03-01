declare const device: any;

const onDeviceReady = () => {
  console.log(`
     Model: ${device.model} \n
     Platform: ${device.platform} \n
     Uuid: ${device.uuid} \n
     Version: ${device.version} \n
     Manufacturer: ${device.manufacturer} \n
     isVirtual: ${device.isVirtual} \n
     Serial: ${device.serial} \n
    `);
};

const onBatteryStatus = (status: any) => {
  console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
};

document.addEventListener("deviceready", onDeviceReady, false);
window.addEventListener("batterystatus", onBatteryStatus, false);
