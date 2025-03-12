
import React from "react";
import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserAvatar from "@/components/UserAvatar";

// Mock data for mentors
const mentors = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    role: "Associate Professor",
    department: "Computer Science",
    expertise: ["Machine Learning", "Data Science", "Algorithms"],
    availability: "Open to new mentees",
    imageUrl: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: "2",
    name: "Prof. Michael Johnson",
    role: "Professor",
    department: "Electrical Engineering",
    expertise: ["Robotics", "IoT", "Embedded Systems"],
    availability: "Full for this semester",
    imageUrl: "https://i.pravatar.cc/150?img=52",
  },
  {
    id: "3",
    name: "Dr. Emily Taylor",
    role: "Assistant Professor",
    department: "Computer Science",
    expertise: ["Web Development", "UX Design", "Human-Computer Interaction"],
    availability: "Open to new mentees",
    imageUrl: "https://i.pravatar.cc/150?img=23",
  },
  {
    id: "4",
    name: "Prof. James Wilson",
    role: "Professor",
    department: "Data Science",
    expertise: ["Big Data", "Neural Networks", "Statistical Analysis"],
    availability: "Limited availability",
    imageUrl: "https://i.pravatar.cc/150?img=59",
  },
];

const Mentors = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const filteredMentors = mentors.filter(mentor => 
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
    mentor.department.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Connect with Faculty Mentors</h1>
            <p className="text-muted-foreground text-lg">
              Get guidance from experienced faculty members who can help you with your academic and project work.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, expertise, or department..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter size={16} />
                Filters
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMentors.length > 0 ? (
                filteredMentors.map(mentor => (
                  <Card key={mentor.id} className="overflow-hidden hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <UserAvatar 
                          src={mentor.imageUrl} 
                          name={mentor.name} 
                          size="lg" 
                        />
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold">
                                <Link to={`/mentors/${mentor.id}`} className="hover:text-primary">
                                  {mentor.name}
                                </Link>
                              </h3>
                              <p className="text-sm text-muted-foreground mb-1">{mentor.role}</p>
                              <p className="text-sm font-medium mb-2">{mentor.department}</p>
                            </div>
                            
                            <Badge variant={mentor.availability.includes("Open") ? "default" : "secondary"}>
                              {mentor.availability}
                            </Badge>
                          </div>
                          
                          <div className="mt-3">
                            <p className="text-sm font-medium mb-2">Expertise:</p>
                            <div className="flex flex-wrap gap-2">
                              {mentor.expertise.map((skill, idx) => (
                                <Badge key={idx} variant="outline">{skill}</Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/mentors/${mentor.id}`}>View Profile</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-2 py-12 text-center">
                  <p className="text-muted-foreground mb-4">No mentors found matching your search criteria.</p>
                  <Button variant="outline" onClick={() => setSearchTerm("")}>Clear Search</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mentors;
