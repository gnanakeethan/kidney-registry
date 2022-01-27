# syntax=docker/dockerfile:1
FROM golang:alpine
RUN apk add git
WORKDIR /app
COPY . ./
RUN go get .
RUN go build -o backend main.go

#FROM alpine:latest
#RUN apk --no-cache add ca-certificates
#WORKDIR /
#COPY --from=0 /backend ./backend
#CMD ["./backend"]
