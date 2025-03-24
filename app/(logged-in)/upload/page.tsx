import "@/components/common/blob.css";
import "@/components/upload/upload-header";
import UploadHeader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/upload-form";

export default function Page() {
  return (
      <section className="min-h-screen">
        <div className="blob"/>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-8">
                <UploadHeader />
                <UploadForm />
            </div>
        </div>
      </section>
    );
}