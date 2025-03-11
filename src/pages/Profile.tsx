
import React from "react";
import { Link } from "react-router-dom";
import UserAvatar from "@/components/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Link as LinkIcon, BookOpen, Github, Linkedin, Calendar, Edit } from "lucide-react";

const Profile = () => {
  // Mock data - would come from API/context in a real app
  const user = {
    id: "1",
    name: "Alex Johnson",
    role: "Computer Science Student",
    year: "Junior (3rd Year)",
    avatar: "",
    bio: "Passionate about creating user-friendly applications and exploring new technologies. Currently focused on machine learning and web development.",
    location: "University of California, Berkeley",
    email: "alex.johnson@berkeley.edu",
    website: "alexjohnson.dev",
    github: "alexjohnson",
    linkedin: "alex-johnson",
    skills: ["React", "JavaScript", "Python", "Machine Learning", "UI/UX Design", "Node.js"],
    education: "Bachelor of Science in Computer Science",
    joinDate: "September 2021",
  };

  const userProjects = [
    {
      id: "1",
      title: "Smart Campus Navigation",
      description: "A mobile app that helps students navigate campus efficiently with real-time updates about crowded areas.",
      thumbnail: "/placeholder.svg",
      tags: ["Mobile", "React Native", "Maps API"],
    },
    {
      id: "2",
      title: "Course Recommendation System",
      description: "AI-powered system that recommends courses based on student interests and career goals.",
      thumbnail: "/placeholder.svg",
      tags: ["Python", "Machine Learning", "Data Analysis"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - User info */}
        <div className="md:col-span-1">
          <Card className="sticky top-20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-6">
                <UserAvatar 
                  name={user.name} 
                  src={user.avatar} 
                  size="xl" 
                  className="mb-4"
                />
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-muted-foreground mb-2">{user.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{user.year}</p>
                
                <Button className="w-full mb-2">
                  <Edit size={16} className="mr-2" />
                  Edit Profile
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">About</h3>
                  <p className="text-sm text-muted-foreground">{user.bio}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Info</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail size={16} />
                      <a href={`mailto:${user.email}`} className="hover:text-primary">{user.email}</a>
                    </div>
                    {user.website && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <LinkIcon size={16} />
                        <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                          {user.website}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen size={16} />
                      <span>{user.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span>Joined {user.joinDate}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Connect</h3>
                  <div className="flex space-x-2">
                    {user.github && (
                      <a 
                        href={`https://github.com/${user.github}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {user.linkedin && (
                      <a 
                        href={`https://linkedin.com/in/${user.linkedin}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column - Projects and activity */}
        <div className="md:col-span-2">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Projects</h2>
              <Link to="/projects/new">
                <Button variant="outline">Create New Project</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {userProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 h-48 sm:h-auto">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="sm:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          <Link to={`/projects/${project.id}`} className="hover:text-primary">
                            {project.title}
                          </Link>
                        </h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Link to={`/projects/${project.id}`}>
                          <Button variant="ghost" size="sm">View Project</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
            
            {userProjects.length === 0 && (
              <div className="text-center p-12 border rounded-lg border-dashed">
                <h3 className="text-lg font-medium mb-2">No projects yet</h3>
                <p className="text-muted-foreground mb-4">Create your first project to showcase your work</p>
                <Link to="/projects/new">
                  <Button>Create Project</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
