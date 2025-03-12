
import React from "react";
import { Link } from "react-router-dom";
import { Search, Filter, MapPin, Briefcase, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserAvatar from "@/components/UserAvatar";

// Mock data for alumni
const alumni = [
  {
    id: "1",
    name: "Jessica Zhang",
    graduationYear: 2021,
    degree: "B.S. Computer Science",
    company: "Google",
    role: "Software Engineer",
    location: "Mountain View, CA",
    skills: ["React", "TypeScript", "Cloud Computing"],
    availableForMentoring: true,
    imageUrl: "https://i.pravatar.cc/150?img=25",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    graduationYear: 2019,
    degree: "M.S. Data Science",
    company: "Amazon",
    role: "Data Scientist",
    location: "Seattle, WA",
    skills: ["Python", "Machine Learning", "AWS"],
    availableForMentoring: false,
    imageUrl: "https://i.pravatar.cc/150?img=53",
  },
  {
    id: "3",
    name: "Priya Patel",
    graduationYear: 2020,
    degree: "B.S. Computer Engineering",
    company: "Apple",
    role: "Hardware Engineer",
    location: "Cupertino, CA",
    skills: ["Circuit Design", "Firmware", "IoT"],
    availableForMentoring: true,
    imageUrl: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: "4",
    name: "David Kim",
    graduationYear: 2018,
    degree: "Ph.D. Artificial Intelligence",
    company: "Microsoft Research",
    role: "Research Scientist",
    location: "Redmond, WA",
    skills: ["Deep Learning", "Computer Vision", "NLP"],
    availableForMentoring: true,
    imageUrl: "https://i.pravatar.cc/150?img=61",
  },
];

const Alumni = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const filteredAlumni = alumni.filter(alum => 
    alum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alum.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alum.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alum.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Connect with Alumni</h1>
            <p className="text-muted-foreground text-lg">
              Learn from graduates who have successfully transitioned into industry roles and get real-world insights.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, company, role, or skills..."
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
              {filteredAlumni.length > 0 ? (
                filteredAlumni.map(alum => (
                  <Card key={alum.id} className="overflow-hidden hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <UserAvatar 
                          src={alum.imageUrl} 
                          name={alum.name} 
                          size="lg" 
                        />
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold">
                                <Link to={`/alumni/${alum.id}`} className="hover:text-primary">
                                  {alum.name}
                                </Link>
                              </h3>
                              <p className="text-sm text-muted-foreground">{alum.degree}, {alum.graduationYear}</p>
                            </div>
                            
                            {alum.availableForMentoring && (
                              <Badge variant="default">Available for Mentoring</Badge>
                            )}
                          </div>
                          
                          <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Briefcase size={14} className="text-muted-foreground" />
                              <span>
                                <span className="font-medium">{alum.role}</span> at {alum.company}
                              </span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin size={14} className="text-muted-foreground" />
                              <span>{alum.location}</span>
                            </div>
                          </div>
                          
                          <div className="mt-3">
                            <div className="flex flex-wrap gap-2">
                              {alum.skills.map((skill, idx) => (
                                <Badge key={idx} variant="outline">{skill}</Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm" className="gap-1" asChild>
                              <Link to={`/alumni/${alum.id}`}>
                                View Profile <ExternalLink size={14} />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-2 py-12 text-center">
                  <p className="text-muted-foreground mb-4">No alumni found matching your search criteria.</p>
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

export default Alumni;
