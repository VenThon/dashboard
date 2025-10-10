import { SubjectDialog } from "../(components)/subject-dialog";

export default function SubjectListing() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-[#058248]">
        All Subjects in CTCs
      </h1>
      <SubjectDialog />
    </section>
  );
}
