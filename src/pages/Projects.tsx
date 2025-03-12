
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { api } from "@/lib/api";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  teamMembers: {
    id: string;
    name: string;
    role: string;
    avatarUrl?: string;
  }[];
};

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: api.getProjects,
  });

  const filteredProjects = projects
    ? projects.filter((project) => {
        const matchesSearch = project.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) || 
          project.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
            
        const matchesCategory = categoryFilter 
          ? project.category === categoryFilter 
          : true;
          
        return matchesSearch && matchesCategory;
      })
    : [];

  // Extract unique categories for filter
  const categories = projects
    ? [...new Set(projects.map((project) => project.category))]
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Projects</h1>
            <p className="text-muted-foreground">
              Discover innovative student projects across various disciplines and domains
            </p>
          </div>
          
          {/* Search and filters */}
          <div className="mb-10 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search projects..."
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="w-full md:w-60">
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                      <SelectTrigger>
                        <div className="flex items-center">
                          <Filter className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="All Categories" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Projects grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-muted animate-pulse" />
                  <CardContent className="p-4">
                    <div className="h-6 w-2/3 bg-muted rounded animate-pulse mb-3" />
                    <div className="h-4 bg-muted rounded animate-pulse mb-2" />
                    <div className="h-4 w-4/5 bg-muted rounded animate-pulse" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-lg font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              {categoryFilter && (
                <Button
                  variant="outline"
                  onClick={() => setCategoryFilter("")}
                >
                  Clear Category Filter
                </Button>
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
