import { useState } from "react";

const steps = [
  {
    title: "ขั้นตอนที่ 1",
    description:
      "กดปุ่ม TEMP SET (D) ที่หน้าจอเครื่อง Blanketrol III แล้วหมุนปรับอุณหภูมิน้ำให้ได้ 27°C",
    image: "/images/temp_set_example.png",
  },
  {
    title: "ขั้นตอนที่ 2",
    description:
      "กดปุ่ม Manual Control (B) เพื่อให้เครื่องเริ่มควบคุมอุณหภูมิตามค่าที่ตั้งไว้",
    image: "/images/manual_control_example.png",
  },
  {
    title: "ขั้นตอนที่ 3",
    description:
      "ตรวจสอบค่าแสดงผลที่หน้าจอ (A) ให้แน่ใจว่าเครื่องทำงานตามค่าที่ตั้งไว้",
    image: "/images/display_check_example.png",
  },
];

export default function BlanketrolSetup() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        การตั้งค่าเครื่อง Blanketrol III
      </h1>
      <div className="bg-white rounded-xl shadow-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">{steps[step].title}</h2>
        <p>{steps[step].description}</p>
        <img
          src={steps[step].image}
          alt={steps[step].title}
          className="w-full rounded-xl border shadow"
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={prevStep}
            disabled={step === 0}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            ย้อนกลับ
          </button>
          <button
            onClick={nextStep}
            disabled={step === steps.length - 1}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            ถัดไป
          </button>
        </div>
      </div>
    </div>
  );
}
