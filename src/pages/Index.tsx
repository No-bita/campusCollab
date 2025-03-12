
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Users, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Mock data for featured projects
const featuredProjects = [
  {
    id: "1",
    title: "Smart Campus Navigation System",
    description: "A mobile app using AR technology to help students navigate IIT BHU campus buildings and locate resources.",
    imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop",
    category: "Mobile App",
    teamMembers: [
      { id: "u1", name: "Alex Johnson", role: "Team Lead", avatarUrl: "https://i.pravatar.cc/150?img=1" },
      { id: "u2", name: "Maria Garcia", role: "UI Designer", avatarUrl: "https://i.pravatar.cc/150?img=5" },
      { id: "u3", name: "David Kim", role: "Developer", avatarUrl: "https://i.pravatar.cc/150?img=7" },
    ],
  },
  {
    id: "2",
    title: "EcoTrack: Campus Sustainability Dashboard",
    description: "Real-time monitoring system for tracking and visualizing IIT BHU campus energy usage and sustainability metrics.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2094&auto=format&fit=crop",
    category: "Web Application",
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
    description: "VR platform for conducting physics and chemistry experiments virtually with real-time collaboration for IIT BHU students.",
    imageUrl: "https://images.unsplash.com/photo-1581091878591-4f0714c6f35b?q=80&w=2070&auto=format&fit=crop",
    category: "VR Application",
    teamMembers: [
      { id: "u8", name: "Daniel Carter", role: "VR Developer", avatarUrl: "https://i.pravatar.cc/150?img=15" },
      { id: "u9", name: "Olivia Martinez", role: "3D Artist", avatarUrl: "https://i.pravatar.cc/150?img=20" },
      { id: "u10", name: "William Taylor", role: "Educator", avatarUrl: "https://i.pravatar.cc/150?img=22" },
    ],
  },
];

const Index = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col bg-background ${isPageLoaded ? 'animate-page-in' : 'opacity-0'}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-40 md:pb-32 relative">
        <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Connect. Collaborate. Create.
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in text-black" style={{ animationDelay: '0.2s' }}>
              Showcase Your Projects & Collaborate at IIT BHU
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              A platform for IIT BHU students to share their work, connect with mentors, 
              and gain insights from industry professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="shadow-md" asChild>
                <Link to="/projects">Explore Projects</Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link to="/login">Join the Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Featured Projects</h2>
            <Button variant="ghost" className="gap-1 text-primary hover:text-primary/80" asChild>
              <Link to="/projects">
                View All <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">How It Works</h2>
            <p className="text-muted-foreground">
              Our platform connects IIT BHU students, professors, and alumni to create an 
              ecosystem of innovation and collaborative learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="animate-fade-in border-border/40 shadow-md hover:shadow-lg transition-shadow" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Showcase Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Create detailed profiles for your academic projects with descriptions, 
                  images, videos, and documentation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in border-border/40 shadow-md hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Collaborate</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with IIT BHU students across years and departments to form diverse 
                  teams and enhance your projects.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in border-border/40 shadow-md hover:shadow-lg transition-shadow" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Get Mentorship</h3>
                <p className="text-sm text-muted-foreground">
                  Receive guidance from IIT BHU professors and faculty members who specialize 
                  in your area of interest.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in border-border/40 shadow-md hover:shadow-lg transition-shadow" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Industry Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with IIT BHU alumni and industry professionals to gain valuable 
                  feedback and real-world perspectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Ready to Share Your Project?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of IIT BHU students who are showcasing their work, forming teams, 
              and receiving valuable feedback from mentors and industry professionals.
            </p>
            <Button size="lg" className="shadow-md" asChild>
              <Link to="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
