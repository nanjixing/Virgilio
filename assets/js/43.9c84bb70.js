(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{378:function(e,t,a){"use strict";a.r(t);var o=a(33),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Distinguish-Hype-from-Opportunities"}},[e._v("Distinguish Hype from Opportunities")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Kill-the-Hype"}},[e._v("Kill the Hype")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Opportunities"}},[e._v("Evaluate Opportunities")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#The-Charming-Salesman"}},[e._v("The Charming Salesman")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#No-ML-without-data"}},[e._v("No ML without data")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#No-value-without-a-cultural-change"}},[e._v("No value without a cultural change")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#conclusions"}},[e._v("Conclusions")])])]),e._v(" "),a("p",[e._v("Let's dive right in!")]),e._v(" "),a("h3",{attrs:{id:"distinguish-hype-from-opportunities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distinguish-hype-from-opportunities"}},[e._v("#")]),e._v(" Distinguish Hype from Opportunities")]),e._v(" "),a("p",[e._v("Although AI and Machine Learning offer immense business and product opportunities, they are not always the recipe for all evils. Indeed, be wary of those who tell you that with these tools you can solve any kind of problem. In this guide we try to break down the various factors that may suggest the non-feasibility of a Machine Learning project.")]),e._v(" "),a("h4",{attrs:{id:"kill-the-hype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kill-the-hype"}},[e._v("#")]),e._v(" Kill the Hype")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://it.wikipedia.org/wiki/Hype",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hype"),a("OutboundLink")],1),e._v(" is a clamor around a person or a fact, an insistent and powerful voice that projects it to the top of the headlines and in positive opinions. Often (not always) however, it's a straw fire, a passing fashion that falls as the facts belie expectations.")]),e._v(" "),a("p",[e._v("There's too much hype around ML and in particular "),a("a",{attrs:{href:"https://medium.com/@hypergiant/is-neural-network-hype-killing-machine-learning-120041406f1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deep Learning"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Deep learning creates learning models by acquiring notions that are passed on to it by algorithms and that it organizes in a pyramidal way, managing to learn more complex concepts starting from the simplest ones.")]),e._v(" "),a("p",[e._v("But deep learning requires three elements to function, as we have seen in previous guides:")]),e._v(" "),a("ul",[a("li",[e._v("date")]),e._v(" "),a("li",[e._v("know-how")]),e._v(" "),a("li",[e._v("computational power")])]),e._v(" "),a("p",[e._v("Be wary of anyone who proposes a Deep Learning project that lacks one of these three elements, and ask specific questions about each of them.\nYou can refer to "),a("RouterLink",{attrs:{to:"/serving/paradiso/do-you-really-need-ml/do_you_need_ml.html"}},[e._v("this previous guide")]),e._v(" for guidelines on how to compare responses and understand the feasibility of projects.\nOf course, to fully evaluate the feasibility of a project you need experience and knowledge of the domain, but you can rest assured that if one of the three elements is missing, it is likely that what is being proposed is pure distillate of hype.")],1),e._v(" "),a("p",[e._v("So we understand how justified hype is, in the sense that Deep Learning opens up incredible possibilities and without previous examples, but it is also a double-edged weapon, which can damage the very economy of technology because it does not meet the (too high) expectations.")]),e._v(" "),a("h4",{attrs:{id:"evaluate-opportunities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evaluate-opportunities"}},[e._v("#")]),e._v(" Evaluate Opportunities")]),e._v(" "),a("p",[e._v("The previous premise does not take away the fact that if you have data, know-how and computational power, it is "),a("em",[e._v("probable")]),e._v(" that Deep Learning can offer you incredible possibilities.")]),e._v(" "),a("p",[e._v("How can you find out if the data you have hides hidden pearls? in general you can think that, having the right amount of data (for example, rows of a database), you can use Machine Learning methods to predict the value (continuous) or the class (discrete) associated with a row. In other words, you can try to predict the value of a column!")]),e._v(" "),a("p",[e._v("Imagine the following (simplified) situation:")]),e._v(" "),a("p",[e._v('We have an e-commerce database, which contains for each line the record of purchase of a product.\nSome columns are: "name", "color", "price", "price range".\nThe column "price range" contains a label that identifies if an item has a low price or high, and is provided by the company that produces the product (we have not assigned it).')]),e._v(" "),a("p",[e._v("Every now and then, however, the company that supplies the products is careless and forgets to assign a price range to the object.")]),e._v(" "),a("p",[e._v("How can we solve this problem?")]),e._v(" "),a("p",[e._v('The problem consists in a binary classification task that takes as input the price of the object (some features, such as color, do not affect the price in this case) and returns in output the label of the price range ("high" or "low").')]),e._v(" "),a("ul",[a("li",[e._v("We can try to apply a Deep Learning technique")]),e._v(" "),a("li",[e._v("We can try to apply a more general Machine Learning technique")]),e._v(" "),a("li",[e._v("We can use a heuristics program that's been created specifically for that.")])]),e._v(" "),a("p",[e._v("Let's analyze the various possibilities:")]),e._v(" "),a("p",[e._v('First of all, it must be said that the simplest solution would perhaps be to change supplier 😃\nApart from this joke not funny, let\'s start from the case of application of Deep Learning, then a "prmitive" Machine Learning linear model, and then the heuristic.')]),e._v(" "),a("p",[e._v("You could think of developing a neural network that takes in input all the features and returns in output the value of the price range. But it would probably be an overkill! In fact, as we know, the data must be cleaned, prepared to be inserted into the network, the network must be trained and adjusted until it reaches satisfactory evaluation metrics! In addition, if tomorrow the requirements of the forecast change (for example because you add a new label) all this process would be to be done again, and a new network would be to be trained.")]),e._v(" "),a("p",[e._v("Deep learning is an extremely powerful tool, and for this reason you should avoid using it for tasks that are too simple (overengineering is never good).")]),e._v(" "),a("p",[e._v('This problem can be solved much more simply with a simple Machine Learning generic linear model that maps the input to the output without the need to introduce "non-linearity" (main advantage of neural networks). A linear classifier can easily solve the problem, and would probably get even better performance (for reasons that are beyond the scope of this guide, such as lower variance).')]),e._v(" "),a("p",[e._v('Indeed, this problem is so simple that the use of heuristic rules such as "if... then..." could solve it. In fact we could notice that simply all the objects are a certain N value are classified as "cheap" and those above that N as "very expensive". This simple heuristics, expressed with two lines of code in any programming language, solves the problem in the same way.')]),e._v(" "),a("p",[e._v('This reasoning exercise does not want to "put Deep Learning and Machine Learning in a bad light" at all, on the contrary!')]),e._v(" "),a("p",[e._v("But it must be used to understand that they are not always the simplest solution, and sometimes they can be a useless effort (especially in the absence of data, they are worth little).")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://medium.com/datadriveninvestor/when-not-to-use-neural-networks-89fb50622429",target:"_blank",rel:"noopener noreferrer"}},[e._v("This"),a("OutboundLink")],1),e._v(" article has good considerations about this.")]),e._v(" "),a("p",[e._v("So always ask yourself the following question: is my problem quite complex and I have enough data to make useful machine learning techniques or even deep learning?")]),e._v(" "),a("h4",{attrs:{id:"the-charming-salesman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-charming-salesman"}},[e._v("#")]),e._v(" The Charming Salesman")]),e._v(" "),a("p",[e._v("Information technology like any other industry is first and foremost a business.")]),e._v(" "),a("p",[e._v("The techniques and tools of ML and DL are no exception, and their primary task is to solve business problems. That's why they suffer from the same problems as traditional software in the agreement phase between the software developer and the user, and maybe even worse (the hype plays bad tricks)!")]),e._v(" "),a("p",[e._v("Have you ever had someone tell you how they developed a powerful, complicated, aesthetically pleasing application, and all at a low price? Well, would you believe them? If someone told you they could take you to the moon for 1000 euros, would you believe them?")]),e._v(" "),a("p",[e._v("Likewise, be on your guard against those who promise you advanced recommendation engines like NetFlix, or conversational agents that replace psychologists!")]),e._v(" "),a("p",[e._v("In particular, I can't stress more on this, make sure that the data exist, are easily available, are transformable to represent the problem you want to solve!")]),e._v(" "),a("p",[e._v("Most problems in the ML world occur due to "),a("a",{attrs:{href:"https://www.nature.com/articles/d41586-018-07504-9",target:"_blank",rel:"noopener noreferrer"}},[e._v("unfulfilled expectations"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Other reasons for the failure of ML projects can be found "),a("a",{attrs:{href:"https://www.kdnuggets.com/2018/07/why-machine-learning-project-fail.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(", reading is strongly recommended.")]),e._v(" "),a("p",[e._v("Again, these tips don't want to keep you away from the ML, on the contrary! Virgil exists for the very opposite reason.")]),e._v(" "),a("p",[e._v("But what Virgil proposes to do is also to honestly communicate what you can do and what you can't, and give you all the tools to be able to move around this world in a conscious way!")]),e._v(" "),a("p",[e._v("That's what a good guide does!")]),e._v(" "),a("h3",{attrs:{id:"no-ml-without-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-ml-without-data"}},[e._v("#")]),e._v(" No ML without data")]),e._v(" "),a("p",[e._v("Suppose you're within an organization, or you have a problem of your own that you want to solve, and you understand what opportunities the ML offers. We've seen that the key elements you need are data, computing power and know-how.")]),e._v(" "),a("p",[e._v("If you cannot get the data you need for technical, confidentiality, or relational reasons, forget about the ML. In fact, without the data you can do nothing, just as you can't grow a plant without a seed.")]),e._v(" "),a("p",[e._v('So generally the success of an ML project must be sponsored "from above", by those who have access to the data, by those who can retrieve it and make it available.')]),e._v(" "),a("p",[e._v("To be clear, you don't need unthinkable amounts of data (even if numbers help), "),a("a",{attrs:{href:"https://medium.com/swlh/can-your-business-use-machine-learning-without-data-340c59bf9fb0",target:"_blank",rel:"noopener noreferrer"}},[e._v("but the less data you have, the more difficult it is to generate value"),a("OutboundLink")],1),e._v(" through ML projects.")]),e._v(" "),a("p",[e._v("If your boss asks you for a predictive model but doesn't give you the data or access permissions to it, he probably hasn't understood anything about how Machine Learning works, and it's better to try explaining it to him, maybe taking him for a walk here in Paradise 😃")]),e._v(" "),a("h3",{attrs:{id:"no-value-without-a-cultural-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-value-without-a-cultural-change"}},[e._v("#")]),e._v(" No value without a cultural change")]),e._v(" "),a("p",[e._v("At the end of the day, what interests those who put the money in, is the value generated by a project.")]),e._v(" "),a("p",[e._v("It is therefore clear that without a change of (cultural) approach to the issue of data, it is impossible to create value through Machine Learning projects, and thus meet the needs of those who want the problem to be solved.")]),e._v(" "),a("p",[e._v("If a chat-bot is developed within a company, and it is not used, it is useless.")]),e._v(" "),a("p",[e._v("If recommendation systems are put in place, but then there is no care for the production and care of high quality data, it is useless.")]),e._v(" "),a("p",[e._v('The cultural change is the main "soft" requirement of the success of a Machine Learning project, and often also the most underestimated.')]),e._v(" "),a("p",[e._v('In a future guide, the issue of "becoming a data-driven company" will be addressed.')]),e._v(" "),a("h3",{attrs:{id:"conclusions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),a("p",[e._v("The purpose of this guide is to provide awareness about the real business possibilities of Machine Learning.")]),e._v(" "),a("p",[e._v("We have seen the risks and possible pitfalls of machine learning projects based on hype and not on solid foundations such as large amounts of data and realistic assessment of the difficulty of solving a problem.")]),e._v(" "),a("p",[e._v("We have also seen how without a radical change of mentality and approach, even the most successful ML project is useless: imagine owning a Ferrari but not knowing how to drive!")])])}),[],!1,null,null,null);t.default=n.exports}}]);