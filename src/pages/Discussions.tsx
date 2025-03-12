
import React from "react";
import { Link } from "react-router-dom";
import { Search, MessageSquare, Users, Clock, Tag, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserAvatar from "@/components/UserAvatar";

// Mock data for discussions
const discussions = [
  {
    id: "1",
    title: "Best practices for implementing team collaboration in a large-scale web application?",
    content: "I'm working on a team project and we're struggling with how to best organize our collaboration workflow...",
    author: {
      id: "u1",
      name: "Alex Johnson",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    category: "Web Development",
    tags: ["Collaboration", "Team Projects", "Software Engineering"],
    createdAt: "2 hours ago",
    replyCount: 8,
    viewCount: 45,
  },
  {
    id: "2",
    title: "How to effectively present research results to non-technical stakeholders?",
    content: "I have some complex data analysis results that I need to communicate to project stakeholders who don't have a technical background...",
    author: {
      id: "u2",
      name: "Maria Garcia",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
    },
    category: "Data Science",
    tags: ["Communication", "Data Visualization", "Presentations"],
    createdAt: "5 hours ago",
    replyCount: 12,
    viewCount: 78,
  },
  {
    id: "3",
    title: "Resources for learning advanced machine learning concepts?",
    content: "I'm looking for recommendations on books, courses, or tutorials that cover advanced topics in machine learning...",
    author: {
      id: "u3",
      name: "David Kim",
      avatarUrl: "https://i.pravatar.cc/150?img=7",
    },
    category: "Machine Learning",
    tags: ["Learning Resources", "Advanced Topics", "Study Guide"],
    createdAt: "1 day ago",
    replyCount: 15,
    viewCount: 124,
  },
  {
    id: "4",
    title: "Tips for balancing coursework with side projects?",
    content: "I'm finding it challenging to manage my academic responsibilities while also working on personal projects...",
    author: {
      id: "u4",
      name: "Sarah Chen",
      avatarUrl: "https://i.pravatar.cc/150?img=9",
    },
    category: "Student Life",
    tags: ["Time Management", "Productivity", "Work-Life Balance"],
    createdAt: "2 days ago",
    replyCount: 23,
    viewCount: 156,
  },
];

const Discussions = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const filteredDiscussions = discussions.filter(discussion => 
    discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discussion.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discussion.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Community Discussions</h1>
            <p className="text-muted-foreground text-lg">
              Ask questions, share knowledge, and connect with peers in your academic community.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <div className="relative w-full md:w-auto md:flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search discussions..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Button className="w-full md:w-auto gap-2" asChild>
                <Link to="/discussions/new">
                  <Plus size={16} />
                  New Discussion
                </Link>
              </Button>
            </div>
            
            <Tabs defaultValue="all" className="mb-6">
              <TabsList>
                <TabsTrigger value="all">All Discussions</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                <TabsTrigger value="my-posts">My Posts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="space-y-4">
                  {filteredDiscussions.length > 0 ? (
                    filteredDiscussions.map(discussion => (
                      <Card key={discussion.id} className="overflow-hidden hover:shadow-sm transition-all">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <div className="hidden sm:block">
                              <UserAvatar 
                                src={discussion.author.avatarUrl} 
                                name={discussion.author.name} 
                                size="md" 
                              />
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold mb-2">
                                <Link to={`/discussions/${discussion.id}`} className="hover:text-primary">
                                  {discussion.title}
                                </Link>
                              </h3>
                              
                              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                {discussion.content}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 mb-3">
                                <Badge variant="secondary">{discussion.category}</Badge>
                                {discussion.tags.map((tag, idx) => (
                                  <Badge key={idx} variant="outline">{tag}</Badge>
                                ))}
                              </div>
                              
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Users size={14} />
                                  <span>{discussion.author.name}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock size={14} />
                                  <span>{discussion.createdAt}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageSquare size={14} />
                                  <span>{discussion.replyCount} replies</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="bg-muted/30 p-3 border-t border-border/40">
                          <div className="w-full flex justify-end">
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/discussions/${discussion.id}`}>
                                View Discussion
                              </Link>
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))
                  ) : (
                    <div className="py-12 text-center">
                      <p className="text-muted-foreground mb-4">No discussions found matching your search criteria.</p>
                      <Button variant="outline" onClick={() => setSearchTerm("")}>Clear Search</Button>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="popular" className="mt-6">
                <div className="py-12 text-center">
                  <p className="text-muted-foreground">Popular discussions will appear here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="unanswered" className="mt-6">
                <div className="py-12 text-center">
                  <p className="text-muted-foreground">Unanswered discussions will appear here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="my-posts" className="mt-6">
                <div className="py-12 text-center">
                  <p className="text-muted-foreground">Please sign in to view your posts.</p>
                  <Button className="mt-4" asChild>
                    <Link to="/login">Sign In</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Discussions;
