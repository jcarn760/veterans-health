import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Grid } from "@mui/material";
import VetImage from "../assets/MentalHealth/veteransTalking.jpg";
import VetTBI from "../assets/MentalHealth/VetTBI.jpg";
import VetDepression from "../assets/MentalHealth/VetDepression.jpg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const cardData = [
  {
    title: "What is PTSD?",
    subheader: "Post Traumatic Stress Disorder",
    image: VetImage,
    content: ["PTSD is a mental health condition that some people ", // the intro to the card
              "develop after experiencing or witnessing a traumatic ",
              "event, such as combat, natural disasters, accidents, ", 
              "or assault. Symptoms of PTSD can include flashbacks, ", 
              "nightmares, severe anxiety, and uncontrollable thoughts ", 
              "about the event. These symptoms can significantly disrupt ",
              "daily life and may persist for months or even years after ", 
              "the traumatic event. PTSD can affect anyone, including ",
              "military veterans, first responders, and civilians. ",
              "Treatment for PTSD often involves therapy, medication, and support ", 
              "from loved ones and mental health professionals. Early intervention ",
              "and support can help individuals manage their symptoms and improve ", 
              "their quality of life."], 
    detailedContent: [    // add detailed content
      "PTSD can occur after witnessing or experiencing a traumatic event. ", 
      "For veterans, this can stem from combat, training, or military sexual trauma. ",
      "Combat veterans may have faced intense and life-threatening situations, including enemy fire, ",
      "explosions, and witnessing the injury or death of fellow service members. Training exercises, ",
      "particularly those involving simulated combat scenarios or exposure to extreme stress, ",
      "can also trigger PTSD symptoms. Additionally, military sexual trauma (MST), ",
      "which includes sexual assault or harassment experienced during military service, ",
      "can lead to profound psychological distress and contribute to the development of PTSD in veterans. ",
      "Symptoms of PTSD can manifest in various ways, often affecting the individual's mental, emotional, ",
      "and physical well-being. \nThese symptoms may include: \n",
      "1.) Flashbacks: Vivid and intrusive memories of the traumatic event that can feel as though the event is happening again. ",
      "Flashbacks may be triggered by sights, sounds, or smells reminiscent of the trauma. ",

      "2.) Nightmares: Repeated and distressing dreams related to the traumatic event, which can disrupt sleep ",
          "and contribute to feelings of fear and anxiety. \n",

      "3.) Avoidance: Efforts to avoid reminders of the trauma, including places, people, activities, ",
          "or conversations that may trigger distressing memories or emotions. \n",

      "4.) Hypervigilance: Constantly feeling on edge, hyperaware of potential threats, and easily startled. ",
          "This heightened state of arousal can lead to difficulty concentrating, irritability, and trouble sleeping. \n",
  
      "5.) Negative Changes in Mood and Cognition: Persistent negative thoughts and beliefs about oneself, others, ",
          "or the world, often accompanied by feelings of guilt, shame, or detachment from others. Individuals with PTSD may also experience",
          "difficulty experiencing positive emotions and may struggle with memory and concentration.\n",

      "6.) Emotional Reactivity: Intense emotional reactions, including anger, sadness, or numbness, ",
          "that may seem disproportionate to the current situation. ",
          "These emotional responses can strain relationships and interfere with daily functioning.\n",
      "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
      "It's important for individuals experiencing symptoms of PTSD to seek support from mental health professionals and connect with resources ",
      "specifically tailored to address the unique needs of veterans. Treatment options for PTSD may include psychotherapy, medication, and support groups, ",
      "all of which can help individuals manage symptoms, regain a sense of control, and improve their overall quality of life.",
      // Add more paragraphs as needed
    ]
  },
  {
    title: "What is a TBI?",
    subheader: "Traumatic Brain Injury",
    image: VetTBI,
    content: ["A Traumatic Brain Injury (TBI) is a disruption in normal brain function caused by a blow, jolt, or penetrating injury to the head. ",
             "TBIs can range from mild, causing temporary changes in consciousness or mental state, to severe, leading to long-term cognitive impairment or even death. ",
             "Symptoms may include headaches, confusion, memory problems, mood changes, and difficulty with balance or coordination. Treatment varies depending on the severity ",
             "of the injury and may include rest, medication, rehabilitation therapies, and cognitive interventions."
            ],

    detailedContent: ["Traumatic Brain Injury (TBI) is a complex medical condition resulting from a sudden, external force causing damage to the brain. ",
                      "This force can be the result of a blow to the head, a penetrating head injury, or even the rapid acceleration and deceleration of the brain within the skull, ",
                      "such as in a car accident or explosion.\n",

                      "TBIs can vary widely in severity, ranging from mild concussions to severe injuries with long-term consequences. ",
                      "The severity of a TBI is typically categorized into three levels:\n",

                      "Mild TBI (Concussion): ",

                      "Mild TBIs, often referred to as concussions, may cause temporary loss of consciousness or altered mental state for a brief period. ",
                      "Symptoms can include headaches, confusion, dizziness, nausea, sensitivity to light or noise, and changes in mood or behavior.",
                      "While symptoms may resolve within days or weeks for many individuals, some may experience persistent symptoms, known as post-concussion syndrome.",
                      "\nModerate TBI:",
                      "Symptoms can include prolonged confusion, memory loss, difficulty concentrating, mood swings, and physical impairments such as coordination problems or weakness.",
                      "Rehabilitation may be necessary to address cognitive deficits, physical limitations, and emotional challenges.",
                      "\nSevere TBI:",
                      "Severe TBIs involve profound brain damage, leading to an extended period of unconsciousness (hours to days) or coma. ",
                      "Symptoms can include profound cognitive and physical impairments, including memory loss, paralysis, speech and language difficulties, and changes in personality or behavior. ",
                      "Rehabilitation for severe TBIs may involve intensive therapy to relearn basic skills and adapt to permanent disabilities. ",
                      "\nCommon consequences of TBI include: ",
                      
                      "\nCognitive Impairment: Difficulty with memory, attention, concentration, and problem-solving. ",
                      "\nPhysical Impairment: Challenges with balance, coordination, strength, and mobility. ",
                      "\nEmotional and Behavioral Changes: Mood swings, irritability, impulsivity, depression, anxiety, and social difficulties. ",
                      "\nSensory Changes: Vision or hearing problems, sensitivity to light or noise, and altered taste or smell. ",
                      "\nSleep Disturbances: Insomnia, excessive sleepiness, or changes in sleep patterns. ",
                      "\nTreatment for TBI depends on the severity of the injury and the specific symptoms experienced by the individual. ",
                      "It may involve rest, medication to manage symptoms, rehabilitation therapies (such as physical therapy, occupational therapy, ",
                      "and speech therapy), cognitive interventions, and support from mental health professionals and support groups. ",
                      "Early intervention and comprehensive care are essential for maximizing recovery and improving the long-term outcomes for individuals with TBI."    // add detailed content
      // Add more paragraphs as needed
    ]
  },
  {
    title: "Understanding Depression in Veterans",
    subheader: "Depression",
    image: VetDepression,
    content: ["Depression is a common mental health disorder characterized by persistent feelings of sadness, ",
            "hopelessness, and loss of interest or pleasure in activities once enjoyed. Symptoms may include changes in appetite or weight, ",
            "sleep disturbances, fatigue, difficulty concentrating, feelings of worthlessness or guilt, and thoughts of death or suicide. ",
            "Depression can significantly impact daily functioning, relationships, and overall quality of life. Treatment options include therapy, ",
            "medication, and alternative approaches such as exercise and mindfulness. It's essential for individuals experiencing symptoms of depression ",
            "to seek support from mental health professionals and connect with resources for help and support."
            ],
    detailedContent: [    // add detailed content

            "\nRisk Factors and Causes: ",
            
            "Explore potential risk factors and causes of depression, such as:",
            "Genetic predisposition or family history of depression. ",
            "Trauma, abuse, or stressful life events. ",
            "Chronic illnesses or medical conditions. ",
            "Substance abuse or addiction. ",
            "Certain medications or hormonal changes. ",
            "Neurochemical imbalances in the brain. ",
            
            "\nPrevalence in Veterans:",   
            "The prevalence of depression among veterans, considering factors such as: ",
            "Combat exposure and traumatic experiences. ",
            "Challenges associated with military service, including deployment, separation from family, and transition to civilian life. ",
            "Co-occurrence with other mental health disorders common in veterans, such as PTSD and TBI. ",

            "\nImpact on Daily Life: ",
            "How depression can impact various aspects of an individual's life, including: ",
            "Relationships with family, friends, and coworkers. ",
            "Work or school performance. ",
            "Physical health and self-care habits. ",
            "Social functioning and engagement in activities. ",
            "Risk of substance abuse or self-destructive behaviors. ",
            
            "\nBarriers to Seeking Help:  ",
            "\nCommon barriers that individuals may face in seeking help for depression, such as: ",
            "Stigma surrounding mental illness and seeking treatment. ",
            "Lack of awareness or understanding of depression symptoms. ",
            "Fear of judgment or negative consequences. ",
            "Difficulty accessing mental health services or resources. ",
            
            "\nTreatment Options: ",
            "Information on treatment options for depression, including: ",
            "Psychotherapy (such as cognitive-behavioral therapy, interpersonal therapy, or psychodynamic therapy). ",
            "Medications (such as antidepressants, mood stabilizers, or antipsychotics). ",
            "Alternative approaches (such as exercise, mindfulness, yoga, or dietary changes). ",
            "Combination therapies or complementary treatments. ",
            "Highlight the importance of individualized treatment plans tailored to each person's needs and preferences. ",
            
            "\nSupport and Resources: ",
            "Offer resources and support for individuals struggling with depression, including: ",
            "Helplines, crisis hotlines, and online support groups. ",
            "Peer support programs and community-based organizations. ",
            "Mental health services provided by healthcare professionals, clinics, or hospitals. ",
            "Self-help books, websites, apps, and other educational materials. ",
            "Encourage individuals to reach out for help and support, and provide guidance on how to access available resources."
      // Add more paragraphs as needed
    ]
  },
];

export function MentalHealth() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? false : index); // Toggle or set the new index
  };

  return (
    <>
      <Box>
        <Typography variant="h2">Veterans Resources</Typography>
        <Typography variant="body1">
        
        <p> There are many veteran resources to help with mental health disparities. </p>
        
         <p>1. Department of Veterans Affairs (VA) Mental Health Services: 
          The VA provides a range of mental health services for veterans including counseling, 
          therapy, and psychiatric medication management. 
          They have Vet Centers across the country that offer individual and group counseling.</p>
        
         <p>2. Veterans Crisis Line: This is a confidential toll-free hotline (1-800-273-8255) 
          that veterans can call for immediate crisis intervention. 
          They also offer a text messaging service (send a text to 838255) and 
          online chat for support.</p>

        <p>3. Veterans Service Organizations (VSOs): Organizations like the Veterans of Foreign Wars (VFW),
          American Legion, and Disabled American Veterans (DAV) often provide resources
          and support for veterans' mental health needs. They may offer counseling, peer support groups, 
          and assistance navigating VA benefits.</p>

        <p>4. Military OneSource: This is a Department of Defense-funded program that provides
         a range of support services to service members and their families, 
         including confidential non-medical counseling for a variety of issues, including mental health.</p>

        <p>5. Community Mental Health Centers: Many communities have mental health centers that offer counseling 
          and therapy services, some of which may be tailored specifically for veterans.</p>

        <p>6. Online Resources: Websites like MakeTheConnection.net, operated by the VA, offer resources, videos, 
          and personal stories related to mental health challenges faced by veterans. 
          There are also online support groups and forums where veterans
          can connect with others who have had similar experiences.</p>

        <p>7. Peer Support Programs: Programs like the VA's Peer Specialist program train veterans who have successfully 
          dealt with mental health challenges to provide support and mentorship to their fellow veterans.</p>

        <p>8. Employment and Education Assistance: Programs that assist veterans with finding employment or furthering 
          their education can indirectly support mental health by providing a sense of purpose and stability.</p>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          overflow: "auto",
        }}
      >
        <Grid container spacing={2}>
          {cardData.map((data, index) => (  //use CardData for mapping 
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={data.title}
                  subheader={data.subheader}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={data.image}
                  alt="Mental health Provider talkiing with Servicemember"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {data.content}
                  </Typography>

                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded === index} // Check if this card is expanded
                    onClick={() => handleExpandClick(index)} // Pass the current index
                    aria-expanded={expanded === index}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                  <CardContent>
                    {data.detailedContent && data.detailedContent.map((paragraph, i) => (
                      <Typography key={i} paragraph>
                        {paragraph}
                      </Typography>
                    ))}
                    </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
