function Projects() {
    return (
      <section id="projects" className="py-12 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded shadow-md">Project 1</div>
            <div className="bg-gray-800 p-6 rounded shadow-md">Project 2</div>
            <div className="bg-gray-800 p-6 rounded shadow-md">Project 3</div>
          </div>
        </div>
      </section>
    );
  }

  export default Projects;