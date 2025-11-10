// components/ServicesTable.tsx
import React from "react";

interface ServicesTableProps {
  isDarkMode: boolean;
}

const ServicesTable: React.FC<ServicesTableProps> = ({ isDarkMode }) => {
  return (
    <div className="relative bg-gradient-to-b from-white via-transparent to-white/100 dark:to-black/80 p-6 sm:p-8 rounded-2xl shadow-lg overflow-hidden">
      <h2 className="font-bold font-italic text-center lg:text-3xl lg:text-left">WHAT WE DO</h2>
      <table className="w-full border-separate border-spacing-y-6 text-sm sm:text-base lg:text-lg">
        <thead>
          <tr>
            <th className="text-left font-semibold text-black dark:text-gray-300">SERVICE</th>
            <th className="text-left font-semibold text-black dark:text-gray-300">DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              title: "Brand & Product Strategy",
              desc: (
                <>
                  For founders who need to turn an idea into a clear, compelling, and fundable vision.
                  <ul className="mt-3 space-y-1 list-disc list-inside">
                    <li>Brand identity design & creative direction</li>
                    <li>Go-to-market strategy & positioning</li>
                    <li>UX research & product visioning</li>
                    <li>Pitch deck & investor narrative design</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Software & AI Development",
              desc: (
                <>
                  For businesses ready to scale their digital systems or bring intelligent products to life.
                  <ul className="mt-3 space-y-1 list-disc list-inside">
                    <li>Full-stack web & mobile app development</li>
                    <li>AI integration (chatbots, automation, analytics, LLM-powered tools)</li>
                    <li>API architecture & data pipeline design</li>
                    <li>Product prototyping & MVP builds</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Design & Creative Production",
              desc: (
                <>
                  For teams that want to communicate powerfully and beautifully.
                  <ul className="mt-3 space-y-1 list-disc list-inside">
                    <li>UI/UX design systems</li>
                    <li>Motion & interactive design</li>
                    <li>Visual storytelling, branding, and launch campaigns</li>
                    <li>Marketing website & content design</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Venture Studio Partnerships",
              desc: (
                <>
                  For founders who want more than an agency — they want a partner.
                  <ul className="mt-3 space-y-1 list-disc list-inside">
                    <li>Fractional product & technology leadership</li>
                    <li>Co-building and incubation for early-stage startups</li>
                    <li>Equity-based collaborations (build for ownership)</li>
                    <li>Investor readiness & growth architecture</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Qreative Labs",
              desc: (
                <>
                  Where innovation, art, and consciousness intersect.
                  <ul className="mt-3 space-y-1 list-disc list-inside">
                    <li>Internal experiments, prototypes, and concept launches</li>
                    <li>AI tools, wellness tech, and creative ventures from our studio</li>
                    <li>Open collaborations with artists, engineers, and thinkers</li>
                  </ul>
                </>
              ),
            },
          ].map(({ title, desc }) => (
            <tr key={title} className="align-top">
              <td className="pt-2 pr-4 font-semibold text-gray-900 dark:text-gray-100 w-1/4">
                {title}
              </td>
              <td className="pt-2 text-gray-700 dark:text-gray-300">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;