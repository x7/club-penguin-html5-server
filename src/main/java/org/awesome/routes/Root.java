package org.awesome.routes;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Root {
    @GetMapping("/")
    public String root() {
        return "redirect:/index.html";
    }
}
