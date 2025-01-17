import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Mail, Phone, Linkedin, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const EnrichDataModal = ({ open, onOpenChange }) => {
  const enrichmentOptions = [
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Email waterfall",
      description: "Waterfall between various tools available to fetch email.",
      count: 2
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Personal Email waterfall",
      description: "Waterfall between various tools available to fetch personal email.",
      count: 10
    },
    {
      icon: <Phone className="w-4 h-4" />,
      title: "Phone waterfall",
      description: "Waterfall between various tools available to fetch phone/mobile numbers.",
      count: 6
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      title: "LinkedIn → Enrich person",
      description: "Enrich person based on LinkedIn profile url.",
      count: 1
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Enrich Your Data</DialogTitle>
        </DialogHeader>
        
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search provider, tools, filters here..." 
            className="pl-8"
          />
        </div>

        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {enrichmentOptions.map((option, index) => (
              <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50">
                <div className="mt-1">{option.icon}</div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{option.title}</h4>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{option.count}</span>
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-xs text-purple-600">↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default EnrichDataModal;