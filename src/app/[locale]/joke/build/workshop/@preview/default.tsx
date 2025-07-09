import Card from "@/components/feedback/card";

function PreviewCardWorkshopJoke() {
  return (
    <>
      <h3 className="text-center font-medium">Preview joke</h3>
      <Card jokeSetup="None" jokePunchline="None" variant="joke" />
    </>
  );
}

export default PreviewCardWorkshopJoke;
