interface CommunityHeaderProps {
  title: string;
  description: string;
}

const CommunityHeader = ({ title, description }: CommunityHeaderProps) => {
  return (
    <section className="text-center space-y-4 mb-8 lg:mb-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
        {title}
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </section>
  );
};

export default CommunityHeader;
