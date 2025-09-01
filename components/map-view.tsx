"use client"

export default function MapView() {
  return (
    <div className="bg-white rounded-lg overflow-hidden h-[400px] relative border border-[#0B1120]/10">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115882080.79059409!2d-49.404754966406244!3d-3.162455999999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1691397892014!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  )
}
