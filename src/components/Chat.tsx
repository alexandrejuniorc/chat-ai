"use client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Central Jarvis</CardTitle>
        <CardDescription>
          Desenvolver comigo fica mais fácil! 😁🚀
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[600px] w-full space-y-4 pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-3 text-slate-600 text-sm mb-4"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>Alexandre Junior</AvatarFallback>
                    <AvatarImage src="https://github.com/alexandrejuniorc.png" />
                  </Avatar>
                )}
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>Jarvis</AvatarFallback>
                    <AvatarImage src="https://github.com/chatgpt.png" />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user" ? "Usuário" : "Jarvis"}:
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Como posso ajudar você?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
