import mqtt from "mqtt";
import statisticService from "./statisticService";

export const sendMessage = (topic: string, message: any) => {
  const client = mqtt.connect("mqtt://broker.hivemq.com");

  client.on("connect", () => {
    client.publish(topic, Buffer.from(JSON.stringify(message)));
  });
};

export const receiveMessage = () => {
  const client = mqtt.connect("mqtt://broker.hivemq.com");

  client.on("connect", () => {
    client.subscribe("iot/kstn2024_nhom3/325719/sensor_data", (err) => {
      if (!err) {
        console.log("Subscribe for topic sensor_data successfully");
      }
    });
  });

  client.on("message", (topic, message) => {
    const data = JSON.parse(message.toString());
    console.log("🚀 ~ file: mqttService.ts:25 ~ client.on ~ data:", data);
    statisticService.updateStatistic(data, "user1@gmail.com");
  });
};

export const receiveAnotherMessage = () => {
  const client = mqtt.connect("mqtt://broker.hivemq.com");

  client.on("connect", () => {
    client.subscribe("iot/kstn2024_nhom3/325720/sensor_data", (err) => {
      if (!err) {
        console.log("Subscribe for topic sensor_data successfully");
      }
    });
  });

  client.on("message", (topic, message) => {
    const data = JSON.parse(message.toString());
    console.log("🚀 ~ file: mqttService.ts:25 ~ client.on ~ data:", data);
    statisticService.updateStatistic(data, "user2@gmail.com");
  });
};
