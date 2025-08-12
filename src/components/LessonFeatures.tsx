import { FaMedal, FaPortrait, FaLanguage, FaMapMarkedAlt, FaSkiing } from "react-icons/fa"
import { FaClock } from "react-icons/fa6"

export default function LessonFeatures() {
  const features = [
    {
      icon: <FaMedal className="text-4xl text-blue-600" />,
      title: "國際認證教練",
      description: "擁有國際系統認證的專業教練",
    },
    {
      icon: <FaPortrait className="text-4xl text-blue-600" />,
      title: "人數 Class size",
      description: "一班學員上限為4人",
    },
    {
      icon: <FaLanguage className="text-4xl text-blue-600" />,
      title: "語言 Language",
      description: "中文、粵語、英文",
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-blue-600" />,
      title: "地點 Location",
      description: "二世谷，留壽都",
    },
    {
      icon: <FaClock className="text-4xl text-blue-600" />,
      title: "上課時間 Time",
      description: "全天6小時 or 半天3小時",
    },
    {
      icon: <FaSkiing className="text-4xl text-blue-600" />,
      title: "課程 Classes",
      description: "單板 Snowboard 或 雙板 Ski",
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">客製化私人教練課程</h2>
          <p className="text-lg text-gray-600">Private Lessons</p>
        </div>

        {/* Features in two rows */}
        <div className="space-y-10">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:px-12">
            {features.slice(3, 6).map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
