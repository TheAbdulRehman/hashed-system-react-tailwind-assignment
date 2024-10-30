import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Heading3xl, BodyMd, BodyBase } from "@/components/ui/typography";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <Heading3xl className="font-bold text-red-500 mb-4">Oops!</Heading3xl>
      <BodyMd className="font-medium text-black mb-4">
        Sorry, an unexpected error has occurred.
      </BodyMd>
      <BodyBase className="text-gray-800 italic mb-6">
        <i>{error.statusText || error.message}</i>
      </BodyBase>
      <Link to="/" className="bg-destructive text-white rounded px-8 py-4">
        Go Back to Home
      </Link>
    </div>
  );
}
