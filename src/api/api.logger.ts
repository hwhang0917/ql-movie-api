import { blue, green, red, yellow } from 'chalk';

interface LoggerParams {
  service: string;
  method: string;
  url: string;
  startTime?: [number, number];
  status?: number;
  statusText?: string;
}

const computeResponseTime = (startTime: [number, number]): number => {
  const endTime = process.hrtime(startTime);
  return Math.round(endTime[0] * 1000 + endTime[1] / 1000000);
};

export const httpLog = ({
  service,
  method,
  url,
  startTime,
  status,
  statusText,
}: LoggerParams): void => {
  //serviceName generation
  const serviceName = blue(`[${service}] - `);

  // dateTimeString generation
  const currentDate = new Date();
  const dateString =
    currentDate.getMonth() < 10
      ? `0${currentDate.toLocaleDateString()}`
      : currentDate.toLocaleDateString();
  const timeString = currentDate.toLocaleTimeString();
  const dateTimeString = [dateString, timeString].join(', ');

  //   Method string generation
  const httpMethodString = yellow(`[${method.toUpperCase()}]`);

  // Url string generation
  const urlString = blue(url);

  //   responseString generation
  let responseString: string;
  if (200 <= status && status <= 299) {
    responseString = green(`- Response: ${status} ${statusText}`);
  } else {
    responseString = red(`- Response: ${status} ${statusText}`);
  }

  //  responseTime (+ms) generation
  const responseTimeString = yellow(`+${computeResponseTime(startTime)}ms`);

  console.log(
    serviceName +
      [
        dateTimeString,
        httpMethodString,
        urlString,
        responseString,
        responseTimeString,
      ].join(' '),
  );
};
