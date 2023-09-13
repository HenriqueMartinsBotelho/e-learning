import Courses from "@/components/courses/courses";
import Hero from "@/components/hero/hero";
import NavBar from "@/components/nav-bar/nav-bar";

export default function Home() {
  return (
    <div className="flex flex-col gap-[80px]">
      <NavBar />
      <Hero />
      <Courses
        courses={[
          {
            course_id: "c123456",
            course_name: "Introduction to TypeScript",
            instructor_id: "i789012",
            image_url: "https://example.com/course-image.jpg",
            category: "Programming",
            demo_video: {
              video_id: "v987654",
              video_url: "https://example.com/demo-video.mp4",
              course_id: "c123456",
            },
            sections: [
              {
                section_id: "s111111",
                course_id: "c123456",
                section_title: "Getting Started",
                sub_sections: [
                  {
                    title: "What is TypeScript?",
                    video: {
                      video_id: "v222222",
                      video_url: "https://example.com/video1.mp4",
                      course_id: "c123456",
                      section_id: "s111111",
                    },
                  },
                  {
                    title: "Setting up TypeScript",
                    video: {
                      video_id: "v333333",
                      video_url: "https://example.com/video2.mp4",
                      course_id: "c123456",
                      section_id: "s111111",
                    },
                  },
                ],
              },
              {
                section_id: "s444444",
                course_id: "c123456",
                section_title: "Advanced Topics",
                sub_sections: [
                  {
                    title: "Type Guards",
                    video: {
                      video_id: "v555555",
                      video_url: "https://example.com/video3.mp4",
                      course_id: "c123456",
                      section_id: "s444444",
                    },
                  },
                ],
              },
            ],
            description:
              "Learn the basics of TypeScript, from setup to advanced topics.",
            average_rating: 4.5,
          },
          {
            course_id: "c123456",
            course_name: "Introduction to TypeScript",
            instructor_id: "i789012",
            image_url: "https://example.com/course-image.jpg",
            category: "Programming",
            demo_video: {
              video_id: "v987654",
              video_url: "https://example.com/demo-video.mp4",
              course_id: "c123456",
            },
            sections: [
              {
                section_id: "s111111",
                course_id: "c123456",
                section_title: "Getting Started",
                sub_sections: [
                  {
                    title: "What is TypeScript?",
                    video: {
                      video_id: "v222222",
                      video_url: "https://example.com/video1.mp4",
                      course_id: "c123456",
                      section_id: "s111111",
                    },
                  },
                  {
                    title: "Setting up TypeScript",
                    video: {
                      video_id: "v333333",
                      video_url: "https://example.com/video2.mp4",
                      course_id: "c123456",
                      section_id: "s111111",
                    },
                  },
                ],
              },
              {
                section_id: "s444444",
                course_id: "c123456",
                section_title: "Advanced Topics",
                sub_sections: [
                  {
                    title: "Type Guards",
                    video: {
                      video_id: "v555555",
                      video_url: "https://example.com/video3.mp4",
                      course_id: "c123456",
                      section_id: "s444444",
                    },
                  },
                ],
              },
            ],
            description:
              "Learn the basics of TypeScript, from setup to advanced topics.",
            average_rating: 4.5,
          },
        ]}
      />
    </div>
  );
}
