import Reviews from "@/components/review";
import AddReview from "@/components/review/add-review";

export default function Home() {
  return (
    <div>
      <AddReview />
      <Reviews />
    </div>
  );
}
