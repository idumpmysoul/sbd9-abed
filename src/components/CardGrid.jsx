function CardGrid({ posts }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
            <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                e.target.src = "/api/placeholder/500/300";
                }}
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {post.title}
                </h3>
                <p className="text-gray-600 text-sm">
                {post.body.length > 100
                    ? `${post.body.substring(0, 100).replace(/\n/g, " ")}...`
                    : post.body.replace(/\n/g, " ")}
                </p>
            </div>
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Read more
                </button>
            </div>
            </div>
        ))}
        </div>
    );
}

export default CardGrid;
