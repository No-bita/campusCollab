
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Link as LinkIcon, 
  MessageCircle, 
  FileText, 
  Users, 
  ChevronLeft, 
  ExternalLink, 
  GraduationCap, 
  ThumbsUp,
  Heart
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import TeamMember from "@/components/TeamMember";
import UserAvatar from "@/components/UserAvatar";

// Mock project data
const projectsData = {
  "1": {
    id: "1",
    title: "Smart Campus Navigation System",
    description: "A mobile application using Augmented Reality (AR) technology to help students navigate campus buildings and locate resources efficiently. The app provides real-time directions, highlights points of interest, and offers accessibility features for users with disabilities.",
    longDescription: `<p>The Smart Campus Navigation System is designed to address the common challenge faced by students, faculty, and visitors in navigating large university campuses. Using a combination of AR technology, indoor positioning systems, and campus mapping data, our application provides intuitive navigation guidance.</p>
    
    <p>Key features include:</p>
    <ul>
      <li>Real-time indoor and outdoor navigation with AR overlays</li>
      <li>Search functionality for classrooms, offices, labs, and facilities</li>
      <li>Accessibility routes for wheelchair users</li>
      <li>Points of interest with information about campus history and resources</li>
      <li>Integration with class schedules to provide timely navigation to upcoming classes</li>
      <li>Offline mode for areas with poor connectivity</li>
    </ul>
    
    <p>The application was developed using React Native for cross-platform compatibility, ARCore and ARKit for AR functionality, and a custom backend service for data management. We conducted extensive user testing with students across different years and departments to refine the user experience.</p>
    
    <p>Future development plans include adding indoor 3D mapping for complex buildings, integrating with campus event calendars, and implementing a community feature for reporting navigation issues or suggesting improvements.</p>`,
    imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop",
    images: [
      { id: "img1", url: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop", alt: "AR Navigation overlay" },
      { id: "img2", url: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=2070&auto=format&fit=crop", alt: "Mobile app interface" },
      { id: "img3", url: "https://images.unsplash.com/photo-1573167278390-0686a95b4a10?q=80&w=2069&auto=format&fit=crop", alt: "Student using the app" },
      { id: "img4", url: "https://images.unsplash.com/photo-1523878288860-7ad281611901?q=80&w=2071&auto=format&fit=crop", alt: "Campus map integration" },
    ],
    category: "Mobile App",
    department: "Computer Science",
    year: "2023",
    status: "In Progress",
    website: "https://example.com/smart-campus",
    github: "https://github.com/example/smart-campus",
    tags: ["AR", "Mobile", "Navigation", "Accessibility", "React Native"],
    teamMembers: [
      { 
        id: "u1", 
        name: "Alex Johnson", 
        role: "Team Lead", 
        avatarUrl: "https://i.pravatar.cc/150?img=1",
        bio: "Senior Computer Science student with a focus on mobile development and AR technologies.",
        department: "Computer Science",
        year: "Senior",
        email: "alex.johnson@university.edu",
        linkedin: "https://linkedin.com/in/alexj",
        portfolio: "https://alexjohnson.dev",
        isLeader: true
      },
      { 
        id: "u2", 
        name: "Maria Garcia", 
        role: "UI Designer", 
        avatarUrl: "https://i.pravatar.cc/150?img=5",
        bio: "Junior Design student specializing in user interface and experience design for mobile applications.",
        department: "Graphic Design",
        year: "Junior",
        email: "maria.garcia@university.edu",
        linkedin: "https://linkedin.com/in/mariag",
      },
      { 
        id: "u3", 
        name: "David Kim", 
        role: "Developer", 
        avatarUrl: "https://i.pravatar.cc/150?img=7",
        bio: "Sophomore Computer Science student with expertise in AR development using ARCore and ARKit.",
        department: "Computer Science",
        year: "Sophomore",
        email: "david.kim@university.edu",
        github: "https://github.com/davidk",
      },
    ],
    mentors: [
      {
        id: "m1",
        name: "Dr. Sarah Williams",
        role: "Faculty Advisor",
        avatarUrl: "https://i.pravatar.cc/150?img=32",
        department: "Computer Science",
        email: "s.williams@university.edu",
      },
      {
        id: "m2",
        name: "Prof. Robert Chen",
        role: "AR Specialist",
        avatarUrl: "https://i.pravatar.cc/150?img=68",
        department: "Digital Media",
        email: "r.chen@university.edu",
      }
    ],
    discussions: [
      {
        id: "d1",
        user: {
          id: "u5",
          name: "James Wilson",
          avatarUrl: "https://i.pravatar.cc/150?img=12",
          role: "Student"
        },
        date: "2023-09-15T10:30:00",
        content: "Have you considered implementing indoor positioning using BLE beacons for areas where GPS signal is weak?",
        replies: [
          {
            id: "r1",
            user: {
              id: "u1",
              name: "Alex Johnson",
              avatarUrl: "https://i.pravatar.cc/150?img=1",
              role: "Team Lead"
            },
            date: "2023-09-15T14:22:00",
            content: "Yes, we're actually testing BLE beacons in the engineering building currently. Initial results are promising but there are some accuracy issues we're still working through."
          }
        ]
      },
      {
        id: "d2",
        user: {
          id: "m1",
          name: "Dr. Sarah Williams",
          avatarUrl: "https://i.pravatar.cc/150?img=32",
          role: "Faculty Advisor"
        },
        date: "2023-09-17T09:45:00",
        content: "The latest usability test results show we need to improve the AR overlay visibility in bright outdoor conditions. Let's discuss some potential solutions in our next meeting.",
        replies: []
      }
    ],
    resources: [
      {
        id: "r1",
        name: "Project Presentation",
        type: "PDF",
        url: "#",
        date: "2023-08-20"
      },
      {
        id: "r2",
        name: "UI Design Mockups",
        type: "Figma",
        url: "#",
        date: "2023-07-15"
      },
      {
        id: "r3",
        name: "Technical Architecture",
        type: "PDF",
        url: "#",
        date: "2023-07-10"
      }
    ]
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
    
    // Simulate fetching project data
    setLoading(true);
    setTimeout(() => {
      if (id && projectsData[id as keyof typeof projectsData]) {
        setProject(projectsData[id as keyof typeof projectsData]);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <div className="flex-1 pt-28 pb-16 flex items-center justify-center">
          <div className="animate-pulse space-y-6 w-full max-w-4xl mx-auto px-4">
            <div className="h-12 bg-muted rounded-md w-3/4"></div>
            <div className="h-64 bg-muted rounded-lg w-full"></div>
            <div className="h-8 bg-muted rounded-md w-1/2"></div>
            <div className="h-32 bg-muted rounded-md w-full"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <div className="flex-1 pt-28 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/projects">Browse Other Projects</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col bg-background ${isPageLoaded ? 'animate-page-in' : 'opacity-0'}`}>
      <Header />
      
      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Back button and project status */}
          <div className="flex flex-wrap items-center justify-between mb-6 gap-y-4">
            <Button variant="ghost" asChild className="pl-0 hover:pl-0">
              <Link to="/projects" className="flex items-center">
                <ChevronLeft size={16} className="mr-1" />
                Back to Projects
              </Link>
            </Button>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {project.department}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {project.year}
              </Badge>
              <Badge 
                className={`text-xs ${
                  project.status === "Completed" 
                    ? "bg-green-500/10 text-green-600 hover:bg-green-500/20"
                    : "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20"
                }`}
              >
                {project.status}
              </Badge>
            </div>
          </div>
          
          {/* Project title and category */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                {project.category}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-muted-foreground max-w-3xl">
              {project.description}
            </p>
          </div>
          
          {/* Content tabs */}
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="w-full md:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            {/* Overview tab */}
            <TabsContent value="overview" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {/* Project gallery */}
                  <ProjectGallery images={project.images} />
                  
                  {/* Project details */}
                  <div className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: project.longDescription }} />
                  </div>
                  
                  {/* Project tags */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Project actions */}
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex gap-2">
                        <Button className="flex-1 shadow-sm">
                          <MessageCircle size={16} className="mr-2" />
                          Contact Team
                        </Button>
                        <Button variant="outline" size="icon">
                          <Heart size={16} />
                        </Button>
                      </div>
                      
                      <div className="space-y-3 pt-3 border-t border-border">
                        <h4 className="text-sm font-medium">Project Links</h4>
                        
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <LinkIcon size={16} />
                            Project Website
                            <ExternalLink size={12} className="ml-auto" />
                          </a>
                        )}
                        
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="16"
                              height="16"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                            GitHub Repository
                            <ExternalLink size={12} className="ml-auto" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Team preview */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium">Team Members</h3>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs"
                          onClick={() => setActiveTab("team")}
                        >
                          View All
                        </Button>
                      </div>
                      
                      <div className="space-y-3">
                        {project.teamMembers.slice(0, 3).map((member: any) => (
                          <div key={member.id} className="flex items-center">
                            <UserAvatar
                              src={member.avatarUrl}
                              name={member.name}
                              role={member.role}
                              showInfo={true}
                            />
                            {member.isLeader && (
                              <Badge variant="outline" className="ml-auto text-xs">
                                Lead
                              </Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Mentors */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <GraduationCap size={18} className="mr-2 text-muted-foreground" />
                        <h3 className="text-sm font-medium">Project Mentors</h3>
                      </div>
                      
                      <div className="space-y-3">
                        {project.mentors.map((mentor: any) => (
                          <div key={mentor.id} className="flex items-center">
                            <UserAvatar
                              src={mentor.avatarUrl}
                              name={mentor.name}
                              role={mentor.role}
                              showInfo={true}
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Team tab */}
            <TabsContent value="team" className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-6">Team Members</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.teamMembers.map((member: any) => (
                    <TeamMember key={member.id} {...member} />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Mentors & Advisors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.mentors.map((mentor: any) => (
                    <TeamMember key={mentor.id} {...mentor} />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Discussions tab */}
            <TabsContent value="discussions" className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Project Discussions</h3>
                <Button>New Discussion</Button>
              </div>
              
              <div className="space-y-6">
                {project.discussions.map((discussion: any) => (
                  <Card key={discussion.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-6 border-b border-border">
                        <div className="flex justify-between mb-4">
                          <div className="flex items-center">
                            <UserAvatar
                              src={discussion.user.avatarUrl}
                              name={discussion.user.name}
                              role={discussion.user.role}
                              showInfo={true}
                            />
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(discussion.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                        </div>
                        <p className="text-sm">{discussion.content}</p>
                        
                        <div className="mt-4 flex gap-2">
                          <Button variant="ghost" size="sm" className="text-xs h-8">
                            <ThumbsUp size={14} className="mr-1" />
                            Like
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs h-8">
                            <MessageCircle size={14} className="mr-1" />
                            Reply
                          </Button>
                        </div>
                      </div>
                      
                      {discussion.replies.length > 0 && (
                        <div className="bg-muted/30">
                          {discussion.replies.map((reply: any) => (
                            <div key={reply.id} className="p-6 border-t border-border/40">
                              <div className="flex justify-between mb-4">
                                <div className="flex items-center">
                                  <UserAvatar
                                    src={reply.user.avatarUrl}
                                    name={reply.user.name}
                                    role={reply.user.role}
                                    size="sm"
                                    showInfo={true}
                                  />
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {new Date(reply.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                  })}
                                </div>
                              </div>
                              <p className="text-sm">{reply.content}</p>
                              
                              <div className="mt-4 flex gap-2">
                                <Button variant="ghost" size="sm" className="text-xs h-8">
                                  <ThumbsUp size={14} className="mr-1" />
                                  Like
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Resources tab */}
            <TabsContent value="resources" className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Project Resources</h3>
                <Button>Add Resource</Button>
              </div>
              
              <div className="space-y-4">
                {project.resources.map((resource: any) => (
                  <Card key={resource.id} className="overflow-hidden">
                    <CardContent className="p-4 flex items-center">
                      <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center mr-4">
                        <FileText className="text-primary" size={20} />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{resource.name}</h4>
                        <p className="text-xs text-muted-foreground">{resource.type}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="text-xs text-muted-foreground hidden md:flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {new Date(resource.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                        
                        <Button variant="outline" size="sm" asChild>
                          <a href={resource.url} target="_blank" rel="noreferrer">
                            View
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
