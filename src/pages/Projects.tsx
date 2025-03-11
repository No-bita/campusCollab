
import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Mock data for projects
const allProjects = [
  {
    id: "1",
    title: "Smart Campus Navigation System",
    description: "A mobile app using AR technology to help students navigate campus buildings and locate resources.",
    imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop",
    category: "Mobile App",
    department: "Computer Science",
    year: "2023",
    teamMembers: [
      { id: "u1", name: "Alex Johnson", role: "Team Lead", avatarUrl: "https://i.pravatar.cc/150?img=1" },
      { id: "u2", name: "Maria Garcia", role: "UI Designer", avatarUrl: "https://i.pravatar.cc/150?img=5" },
      { id: "u3", name: "David Kim", role: "Developer", avatarUrl: "https://i.pravatar.cc/150?img=7" },
    ],
  },
  {
    id: "2",
    title: "EcoTrack: Campus Sustainability Dashboard",
    description: "Real-time monitoring system for tracking and visualizing campus energy usage and sustainability metrics.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2094&auto=format&fit=crop",
    category: "Web Application",
    department: "Environmental Science",
    year: "2023",
    teamMembers: [
      { id: "u4", name: "Sarah Chen", role: "Data Scientist", avatarUrl: "https://i.pravatar.cc/150?img=9" },
      { id: "u5", name: "James Wilson", role: "Frontend Dev", avatarUrl: "https://i.pravatar.cc/150?img=12" },
      { id: "u6", name: "Emma Brown", role: "UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=10" },
      { id: "u7", name: "Michael Lee", role: "Backend Dev", avatarUrl: "https://i.pravatar.cc/150?img=11" },
    ],
  },
  {
    id: "3",
    title: "Virtual Science Laboratory",
    description: "VR platform for conducting physics and chemistry experiments virtually with real-time collaboration.",
    imageUrl: "https://images.unsplash.com/photo-1581091878591-4f0714c6f35b?q=80&w=2070&auto=format&fit=crop",
    category: "VR Application",
    department: "Physics",
    year: "2023",
    teamMembers: [
      { id: "u8", name: "Daniel Carter", role: "VR Developer", avatarUrl: "https://i.pravatar.cc/150?img=15" },
      { id: "u9", name: "Olivia Martinez", role: "3D Artist", avatarUrl: "https://i.pravatar.cc/150?img=20" },
      { id: "u10", name: "William Taylor", role: "Educator", avatarUrl: "https://i.pravatar.cc/150?img=22" },
    ],
  },
  {
    id: "4",
    title: "StudentMentor AI Assistant",
    description: "An AI-powered platform that connects students with personalized learning resources and academic support.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    category: "AI/ML",
    department: "Computer Science",
    year: "2022",
    teamMembers: [
      { id: "u11", name: "Sophia Williams", role: "ML Engineer", avatarUrl: "https://i.pravatar.cc/150?img=25" },
      { id: "u12", name: "Ethan Davis", role: "Backend Dev", avatarUrl: "https://i.pravatar.cc/150?img=30" },
      { id: "u13", name: "Isabella Robinson", role: "UX Researcher", avatarUrl: "https://i.pravatar.cc/150?img=35" },
    ],
  },
  {
    id: "5",
    title: "Biometric Authentication for Campus Services",
    description: "Secure authentication system using fingerprint and facial recognition for campus services access.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    category: "Security",
    department: "Electrical Engineering",
    year: "2022",
    teamMembers: [
      { id: "u14", name: "Benjamin Moore", role: "Hardware Eng", avatarUrl: "https://i.pravatar.cc/150?img=40" },
      { id: "u15", name: "Charlotte Lewis", role: "Security Specialist", avatarUrl: "https://i.pravatar.cc/150?img=45" },
      { id: "u16", name: "Henry Walker", role: "Software Eng", avatarUrl: "https://i.pravatar.cc/150?img=50" },
    ],
  },
  {
    id: "6",
    title: "Collaborative Digital Art Installation",
    description: "Interactive digital art installation that allows multiple users to create art together in real-time.",
    imageUrl: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=2059&auto=format&fit=crop",
    category: "Interactive Media",
    department: "Fine Arts",
    year: "2022",
    teamMembers: [
      { id: "u17", name: "Amelia Clark", role: "Artist", avatarUrl: "https://i.pravatar.cc/150?img=55" },
      { id: "u18", name: "Lucas Rodriguez", role: "Media Programmer", avatarUrl: "https://i.pravatar.cc/150?img=60" },
      { id: "u19", name: "Mia Thompson", role: "Sound Designer", avatarUrl: "https://i.pravatar.cc/150?img=65" },
    ],
  },
];

// Categories, departments and years for filters
const categories = ["All", "Mobile App", "Web Application", "VR Application", "AI/ML", "Security", "Interactive Media"];
const departments = ["All", "Computer Science", "Environmental Science", "Physics", "Electrical Engineering", "Fine Arts"];
const years = ["All", "2023", "2022", "2021"];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  useEffect(() => {
    // Apply filters
    let result = allProjects;

    // Apply search
    if (searchTerm) {
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "All") {
      result = result.filter((project) => project.category === selectedCategory);
    }

    // Apply department filter
    if (selectedDepartment !== "All") {
      result = result.filter((project) => project.department === selectedDepartment);
    }

    // Apply year filter
    if (selectedYear !== "All") {
      result = result.filter((project) => project.year === selectedYear);
    }

    setFilteredProjects(result);
  }, [searchTerm, selectedCategory, selectedDepartment, selectedYear]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedDepartment("All");
    setSelectedYear("All");
  };

  const isFiltersApplied = 
    searchTerm !== "" || 
    selectedCategory !== "All" || 
    selectedDepartment !== "All" || 
    selectedYear !== "All";

  return (
    <div className={`min-h-screen flex flex-col bg-background ${isPageLoaded ? 'animate-page-in' : 'opacity-0'}`}>
      <Header />
      
      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Explore Projects</h1>
            <p className="text-muted-foreground">
              Discover innovative projects from students across different departments and years
            </p>
          </div>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search projects..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-3">
              {/* Mobile filter button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="md:hidden flex items-center gap-2">
                    <SlidersHorizontal size={16} />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Narrow down projects by category, department, or year
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="py-6 space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <Select
                        value={selectedCategory}
                        onValueChange={setSelectedCategory}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Department</label>
                      <Select
                        value={selectedDepartment}
                        onValueChange={setSelectedDepartment}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept} value={dept}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Year</label>
                      <Select
                        value={selectedYear}
                        onValueChange={setSelectedYear}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button
                      variant="outline"
                      className="w-full mt-2"
                      onClick={clearFilters}
                      disabled={!isFiltersApplied}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
              
              {/* Desktop filters */}
              <div className="hidden md:flex gap-3">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select
                  value={selectedDepartment}
                  onValueChange={setSelectedDepartment}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select
                  value={selectedYear}
                  onValueChange={setSelectedYear}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Active filters */}
          {isFiltersApplied && (
            <div className="mb-6 flex flex-wrap gap-2 items-center">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              
              {searchTerm && (
                <Badge variant="outline" className="flex items-center gap-1">
                  Search: {searchTerm}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 ml-1 hover:bg-transparent p-0"
                    onClick={() => setSearchTerm("")}
                  >
                    <X size={12} />
                  </Button>
                </Badge>
              )}
              
              {selectedCategory !== "All" && (
                <Badge variant="outline" className="flex items-center gap-1">
                  Category: {selectedCategory}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 ml-1 hover:bg-transparent p-0"
                    onClick={() => setSelectedCategory("All")}
                  >
                    <X size={12} />
                  </Button>
                </Badge>
              )}
              
              {selectedDepartment !== "All" && (
                <Badge variant="outline" className="flex items-center gap-1">
                  Department: {selectedDepartment}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 ml-1 hover:bg-transparent p-0"
                    onClick={() => setSelectedDepartment("All")}
                  >
                    <X size={12} />
                  </Button>
                </Badge>
              )}
              
              {selectedYear !== "All" && (
                <Badge variant="outline" className="flex items-center gap-1">
                  Year: {selectedYear}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 ml-1 hover:bg-transparent p-0"
                    onClick={() => setSelectedYear("All")}
                  >
                    <X size={12} />
                  </Button>
                </Badge>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground text-xs ml-auto"
                onClick={clearFilters}
              >
                Clear all
              </Button>
            </div>
          )}
          
          {/* Projects grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <div className="flex flex-col items-center">
                <Search className="text-muted-foreground mb-4" size={48} />
                <h3 className="text-lg font-medium mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any projects matching your filters.
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
