import React, { useState } from "react";

import thTH from "antd/lib/locale-provider/th_TH";

import "antd/dist/antd.css";
import "./styles.css";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/th";
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'
import generatePicker from 'antd/es/date-picker/generatePicker';
import "antd/es/date-picker/style";

const DatePicker = generatePicker(dayjsGenerateConfig);
var buddhistEra = require("dayjs/plugin/buddhistEra");
dayjs.extend(buddhistEra);

const configuredLocale = {
  ...thTH,
  DatePicker: {
    ...thTH.DatePicker,
    dateFormat: "DD MM BBBB", // DD MM BBBB
    yearFormat: "BBBB",
    lang: {
      ...thTH.DatePicker.lang,
      dateFormat: "DD MM BBBB", // DD MM BBBB
      dateTimeFormat: "DD MM BBBB HH:mm:ss",
      yearFormat: "BBBB"
    }
  }
};
const { RangePicker } = DatePicker;
dayjs.locale("th");
const Time = () => {
  const [value, setValue] = useState([]);
  return (
    <>
      <RangePicker
        format={"DD MM BBBB"}
        value={value}
        onChange={(e) => {
          setValue(e);
        }}
      />
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <ConfigProvider locale={configuredLocale}>
        <Time />
      </ConfigProvider>
    </div>
  );
}
