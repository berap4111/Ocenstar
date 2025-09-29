import React from "react";
import { Box, Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const ServicePage = ({ service }) => {
  if (!service || service.length === 0)
    return (
      <Typography
        variant="h5"
        color="error"
        sx={{ p: 4, textAlign: "center" }}
      >
        No service data available
      </Typography>
    );

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6, px: 2 }}>
      <Card
        sx={{
          width: "100%",
          maxWidth: 900,
          p: 3,
          boxShadow: 6,
          borderRadius: 3,
          backgroundColor: "#f9f9f9",
        }}
      >
        <CardContent>
          {service.map((section, index) => (
            <Box key={index} sx={{ mb: 5 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 600, color: "#1a237e" }}
              >
                {section.title}
              </Typography>

              {section.content && (
                <Typography
                  variant="body1"
                  sx={{ mb: 2, whiteSpace: "pre-line", color: "#424242" }}
                >
                  {section.content}
                </Typography>
              )}

              {section.items && section.items.length > 0 && (
                <List>
                  {section.items.map((item, idx) => (
                    <ListItem key={idx} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32, color: "#1a237e" }}>
                        <ArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ color: "#424242" }}
                      />
                    </ListItem>
                  ))}
                </List>
              )}

              {index < service.length - 1 && (
                <Divider sx={{ mt: 3, borderColor: "#c5cae9" }} />
              )}
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ServicePage;
